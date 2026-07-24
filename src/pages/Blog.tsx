import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "es";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation variant="dark" />

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-medium">
              {t("blog.eyebrow")}
            </span>
            <h1 className="mt-4 text-4xl lg:text-6xl font-light tracking-tight">
              {t("blog.title")}
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light">
              {t("blog.subtitle")}
            </p>
          </motion.div>

          {posts.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground font-light">
              {t("blog.empty")}
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    {post.cover && (
                      <div className="aspect-[4/3] overflow-hidden rounded-md mb-5 bg-muted">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <time className="text-xs uppercase tracking-wider text-muted-foreground">
                      {new Date(post.date).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-2xl font-light tracking-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 text-muted-foreground font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;