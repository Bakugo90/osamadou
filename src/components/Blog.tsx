import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Blog.css";

// interface Article {
//   title: string;
//   excerpt: string;
//   date: string;
//   tag: string;
//   readTime: string;
//   url: string;
// }

/**
 * Placeholder articles — replace this array with a fetch() call to
 * the Hashnode GQL API (or any other blogging platform) when ready.
 *
 * Hashnode example query:
 *   POST https://gql.hashnode.com
 *   { publication(host: "yourblog.hashnode.dev") {
 *       posts(first: 3) { edges { node {
 *         title brief publishedAt readTimeInMinutes
 *         tags { name } url
 *       }}}}}
 */
// const ARTICLES: Article[] = [
//   {
//     title: "Building a Rate-Limiter from Scratch with Redis",
//     excerpt:
//       "Token bucket, sliding window, and fixed counter — three strategies compared with real benchmarks and production gotchas.",
//     date: "Feb 2026",
//     tag: "Backend",
//     readTime: "8 min",
//     url: "#",
//   },
//   {
//     title: "PostgreSQL Query Planner: What Every Backend Dev Should Know",
//     excerpt:
//       "How EXPLAIN ANALYZE works under the hood, when indexes get ignored, and the three knobs that fix 90% of slow queries.",
//     date: "Jan 2026",
//     tag: "Database",
//     readTime: "12 min",
//     url: "#",
//   },
//   {
//     title: "Zero-Downtime Deployments with Kubernetes Rolling Updates",
//     excerpt:
//       "A step-by-step walkthrough of readiness probes, PodDisruptionBudgets, and the traffic-shifting dance that keeps uptime at 99.99%.",
//     date: "Dec 2025",
//     tag: "DevOps",
//     readTime: "10 min",
//     url: "#",
//   },
// ];

export function Blog() {
  const { t } = useLanguage();
  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("blog.sectionTitle")}
        </motion.h2>

        <div className="blog-list blog-list--empty">
          <motion.div
            className="blog-empty"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* <span className="blog-empty__icon">✍️</span>
            <p className="blog-empty__title">Articles coming soon</p> */}
            <p className="blog-empty__subtitle">
              {t("blog.emptyState")}
            </p>
          </motion.div>
          {/* Will be used later when articles are available */}
          {/* {ARTICLES.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover="hover"
            >
              <div className="blog-row__meta">
                <span className="blog-row__date">{article.date}</span>
                <span className="blog-row__sep">·</span>
                <span className="blog-row__tag">{article.tag}</span>
                <span className="blog-row__sep">·</span>
                <span className="blog-row__read">{article.readTime}</span>
              </div>

              <div className="blog-row__body">
                <div className="blog-row__text">
                  <h3 className="blog-row__title">{article.title}</h3>
                  <p className="blog-row__excerpt">{article.excerpt}</p>
                </div>
                <motion.span
                  className="blog-row__arrow"
                  variants={{ hover: { x: 3, y: -3 } }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={16} />
                </motion.span>
              </div>
            </motion.a>
          ))} */}
        </div>

        {/* <motion.p
          className="blog-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          All articles on{" "}
          <motion.a
            href="https://hashnode.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-footer__link"
            whileHover={{ x: 4 }}
          >
            Hashnode →
          </motion.a>
        </motion.p> */}
      </div>
    </section>
  );
}
