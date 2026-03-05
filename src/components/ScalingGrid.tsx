import { useRef, useEffect, useState, useCallback } from 'react';
import './ScalingGrid.css';

/**
 * ScalingGrid Component
 * 
 * Visualisation créative de "Building systems that scale"
 * Un réseau hexagonal vivant qui grandit organiquement
 * Représente scalabilité, architecture distribuée, croissance
 * 
 * Design inspiré par :
 * - Graphes de microservices
 * - Topologies réseau
 * - Structures cellulaires
 */

interface Node {
  x: number;
  y: number;
  size: number;
  connections: number[];
  opacity: number;
  pulsePhase: number;
  active: boolean;
  birthTime: number;
  spawnPulse: number; // Pour l'effet de pulse à la naissance
}

const CONFIG = {
  nodeRadius: 4,
  connectionOpacity: 0.12,
  pulseSpeed: 0.015,
  growthDelay: 400, // ms entre chaque nouveau nœud - déploiement plus lent
  maxNodes: 24, // Moins de nœuds pour plus de légèreté
  activeNodeGlow: 0.8,
  hoverScale: 1.4
};

const COLORS = {
  node: '#5EF1FF',
  connection: '#5EF1FF',
  activeGlow: 'rgba(94, 241, 255, 0.4)',
  nodeCore: 'rgba(94, 241, 255, 0.9)'
};

export default function ScalingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<Node[]>([]);
  const [isGrowing, setIsGrowing] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const lastGrowthRef = useRef(0);
  const hoverNodeRef = useRef<number>(-1);

  // Créer motif orbital autour du contenu - évite le centre pour le texte
  const getHexagonalPosition = useCallback((index: number, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Répartition en orbites concentriques
    const nodesPerOrbit = 8;
    const orbit = Math.floor(index / nodesPerOrbit);
    const posInOrbit = index % nodesPerOrbit;
    
    // Rayon de l'orbite - commence loin du centre pour éviter le texte
    const minRadius = Math.min(width, height) * 0.3; // Zone texte protégée
    const maxRadius = Math.min(width, height) * 0.48;
    const radiusStep = (maxRadius - minRadius) / 3; // 3 orbites
    const radius = minRadius + (orbit * radiusStep);
    
    // Angle autour du cercle
    const angleStep = (Math.PI * 2) / nodesPerOrbit;
    const angle = posInOrbit * angleStep + (orbit * 0.3); // Légère rotation entre orbites
    
    // Position finale avec variation aléatoire subtile
    const x = centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 20;
    const y = centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 20;
    
    return { x, y };
  }, []);

  // Initialiser premier nœud au centre
  const initNetwork = useCallback((width: number, height: number) => {
    nodesRef.current = [{
      x: width / 2,
      y: height / 2,
      size: CONFIG.nodeRadius,
      connections: [],
      opacity: 1,
      pulsePhase: 0,
      active: true,
      birthTime: Date.now(),
      spawnPulse: 0
    }];
    lastGrowthRef.current = Date.now();
  }, []);

  // Ajouter un nouveau nœud et le connecter intelligemment
  const growNetwork = useCallback((width: number, height: number, now: number) => {
    if (nodesRef.current.length >= CONFIG.maxNodes) {
      setIsGrowing(false);
      return;
    }

    const nodes = nodesRef.current;
    const pos = getHexagonalPosition(nodes.length, width, height);
    
    const newNode: Node = {
      x: pos.x,
      y: pos.y,
      size: 0, // Commence à 0 pour animation de croissance
      connections: [],
      opacity: 0,
      pulsePhase: Math.random() * Math.PI * 2,
      active: false,
      birthTime: now,
      spawnPulse: 1 // Commence avec pulse maximum
    };

    // Trouver les 2-3 nœuds les plus proches pour connexions
    const distances = nodes.map((node, i) => ({
      index: i,
      dist: Math.sqrt(Math.pow(node.x - pos.x, 2) + Math.pow(node.y - pos.y, 2))
    }));
    
    distances.sort((a, b) => a.dist - b.dist);
    
    const connectCount = Math.min(2 + Math.floor(Math.random() * 2), distances.length);
    for (let i = 0; i < connectCount; i++) {
      const targetIndex = distances[i].index;
      newNode.connections.push(targetIndex);
      nodes[targetIndex].connections.push(nodes.length);
    }

    nodes.push(newNode);
  }, [getHexagonalPosition]);

  // Dessiner connexion avec effet de flux
  const drawConnection = (
    ctx: CanvasRenderingContext2D,
    from: Node,
    to: Node,
    time: number
  ) => {
    if (from.opacity < 0.1 || to.opacity < 0.1) return;

    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
    const flowOffset = (Math.sin(time * 0.001 + from.x * 0.01) + 1) / 2;
    
    gradient.addColorStop(0, `rgba(94, 241, 255, ${CONFIG.connectionOpacity * from.opacity * 0.3})`);
    gradient.addColorStop(flowOffset, `rgba(94, 241, 255, ${CONFIG.connectionOpacity * 1.2})`);
    gradient.addColorStop(1, `rgba(94, 241, 255, ${CONFIG.connectionOpacity * to.opacity * 0.3})`);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  };

  // Dessiner nœud avec glow et effet de spawn pulse
  const drawNode = (ctx: CanvasRenderingContext2D, node: Node, index: number, time: number) => {
    if (node.opacity < 0.01) return;

    const pulse = Math.sin(time * CONFIG.pulseSpeed + node.pulsePhase) * 0.3 + 0.7;
    const isHovered = hoverNodeRef.current === index;
    const scale = isHovered ? CONFIG.hoverScale : 1;
    const radius = node.size * pulse * scale;
    
    // Effet de pulse à la naissance - onde qui s'étend
    if (node.spawnPulse > 0.01) {
      const spawnRadius = radius + (CONFIG.nodeRadius * 8 * Math.abs(node.spawnPulse));
      const spawnOpacity = Math.abs(node.spawnPulse) * 0.4;
      
      const spawnGradient = ctx.createRadialGradient(node.x, node.y, radius, node.x, node.y, spawnRadius);
      spawnGradient.addColorStop(0, `rgba(94, 241, 255, ${spawnOpacity})`);
      spawnGradient.addColorStop(0.5, `rgba(94, 241, 255, ${spawnOpacity * 0.5})`);
      spawnGradient.addColorStop(1, 'rgba(94, 241, 255, 0)');
      
      ctx.fillStyle = spawnGradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, spawnRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Glow étendu pour nœuds actifs ou hover
    if (node.active || isHovered) {
      const glowRadius = radius * 6;
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
      gradient.addColorStop(0, COLORS.activeGlow);
      gradient.addColorStop(0.3, 'rgba(94, 241, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(94, 241, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(
        node.x - glowRadius,
        node.y - glowRadius,
        glowRadius * 2,
        glowRadius * 2
      );
    }

    // Glow proximal
    const innerGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 3);
    innerGlow.addColorStop(0, `rgba(94, 241, 255, ${0.3 * node.opacity})`);
    innerGlow.addColorStop(1, 'rgba(94, 241, 255, 0)');
    
    ctx.fillStyle = innerGlow;
    ctx.fillRect(
      node.x - radius * 3,
      node.y - radius * 3,
      radius * 6,
      radius * 6
    );

    // Nœud principal
    ctx.fillStyle = COLORS.nodeCore;
    ctx.globalAlpha = node.opacity;
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Anneau externe
    ctx.strokeStyle = COLORS.node;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    ctx.globalAlpha = 1;
  };

  // Animation principale
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = Date.now();
    const time = performance.now();

    // Clear avec fade subtil
    ctx.fillStyle = 'rgba(11, 13, 16, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const nodes = nodesRef.current;

    // Croissance du réseau
    if (isGrowing && now - lastGrowthRef.current > CONFIG.growthDelay) {
      growNetwork(canvas.width, canvas.height, now);
      lastGrowthRef.current = now;
    }

    // Animer l'apparition des nouveaux nœuds avec pulse réaliste
    nodes.forEach((node) => {
      const age = now - node.birthTime;
      const growthDuration = 800;
      const pulseDuration = 1200; // Durée totale du pulse
      
      if (age < growthDuration) {
        // Croissance avec easing elastique
        const progress = age / growthDuration;
        const elasticEase = progress < 0.5
          ? 8 * progress * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 4) / 2;
        
        node.size = CONFIG.nodeRadius * elasticEase;
        node.opacity = Math.min(progress * 1.5, 1);
      } else {
        node.size = CONFIG.nodeRadius;
        node.opacity = 1;
      }
      
      // Effet de pulse à la naissance (onde qui s'étend)
      if (age < pulseDuration) {
        const pulseProgress = age / pulseDuration;
        // Pulse diminue exponentiellement
        node.spawnPulse = Math.exp(-pulseProgress * 4) * Math.sin(pulseProgress * Math.PI * 3);
      } else {
        node.spawnPulse = 0;
      }

      // Activer aléatoirement des nœuds (simulation d'activité)
      if (Math.random() < 0.002) {
        node.active = !node.active;
      }
    });

    // Dessiner connexions
    nodes.forEach((node, i) => {
      node.connections.forEach(targetIndex => {
        if (targetIndex > i) { // Éviter doublons
          drawConnection(ctx, node, nodes[targetIndex], time);
        }
      });
    });

    // Dessiner nœuds
    nodes.forEach((node, i) => drawNode(ctx, node, i, time));

    animationRef.current = requestAnimationFrame(animate);
  }, [isGrowing, growNetwork]);

  // Gérer hover
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let hoveredIndex = -1;
    nodesRef.current.forEach((node, i) => {
      const dist = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2));
      if (dist < CONFIG.nodeRadius * 3) {
        hoveredIndex = i;
      }
    });

    hoverNodeRef.current = hoveredIndex;
  }, []);

  // Gérer scroll - activer nœuds
  const handleScroll = useCallback(() => {
    const nodes = nodesRef.current;
    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    if (randomNode) randomNode.active = true;
    
    setTimeout(() => {
      if (randomNode) randomNode.active = false;
    }, 1500);
  }, []);

  // Setup
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Init Canvas
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      if (nodesRef.current.length === 0) {
        initNetwork(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    canvas.addEventListener('mousemove', handleMouseMove);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion, animate, handleMouseMove, handleScroll, initNetwork]);

  // Fallback statique
  if (prefersReducedMotion) {
    return (
      <div className="scaling-grid-fallback" role="img" aria-label="Scaling system visualization">
        <svg className="scaling-grid-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#5EF1FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#5EF1FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Connexions */}
          <line x1="100" y1="150" x2="200" y2="100" stroke="#5EF1FF" strokeWidth="1" opacity="0.15" />
          <line x1="100" y1="150" x2="200" y2="200" stroke="#5EF1FF" strokeWidth="1" opacity="0.15" />
          <line x1="200" y1="100" x2="300" y2="150" stroke="#5EF1FF" strokeWidth="1" opacity="0.15" />
          <line x1="200" y1="200" x2="300" y2="150" stroke="#5EF1FF" strokeWidth="1" opacity="0.15" />
          <line x1="200" y1="100" x2="200" y2="200" stroke="#5EF1FF" strokeWidth="1" opacity="0.15" />
          
          {/* Nœuds avec glow */}
          <circle cx="100" cy="150" r="12" fill="url(#nodeGlow)" />
          <circle cx="100" cy="150" r="4" fill="#5EF1FF" />
          
          <circle cx="200" cy="100" r="12" fill="url(#nodeGlow)" />
          <circle cx="200" cy="100" r="4" fill="#5EF1FF" />
          
          <circle cx="200" cy="200" r="12" fill="url(#nodeGlow)" />
          <circle cx="200" cy="200" r="4" fill="#5EF1FF" />
          
          <circle cx="300" cy="150" r="12" fill="url(#nodeGlow)" />
          <circle cx="300" cy="150" r="4" fill="#5EF1FF" />
        </svg>
      </div>
    );
  }

  return (
    <div className="scaling-grid-container">
      <canvas ref={canvasRef} className="scaling-grid-canvas" />
    </div>
  );
}
