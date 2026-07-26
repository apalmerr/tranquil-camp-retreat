import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPost } from "@/lib/blog";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation variant="dark" />
        <main className="pt-40 pb-24 px-6 lg:px-12 text-center">
          <h1 className="text-3xl font-light mb-6">{t("blog.notFound")}</h1>
          <Link to="/blog" className="text-primary hover:underline">
            {t("blog.back")}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={post.title}
        description={post.excerpt || post.title}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.cover}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: post.author ? { "@type": "Person", name: post.author } : undefined,
          image: post.cover,
        }}
      />
      <Navigation variant="dark" />

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Link
            to="/blog"
            className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            ← {t("blog.back")}
          </Link>

          <header className="mt-6 mb-10">
            <time className="text-xs uppercase tracking-wider text-muted-foreground">
              {new Date(post.date).toLocaleDateString(i18n.language || "es", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-3 text-4xl lg:text-5xl font-light tracking-tight">
              {post.title}
            </h1>
            {post.author && (
              <p className="mt-3 text-sm text-muted-foreground font-light">
                {t("blog.by")} {post.author}
              </p>
            )}
          </header>

          {post.cover && (
            <div className="aspect-[16/9] overflow-hidden rounded-md mb-10 bg-muted">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-neutral max-w-none font-light prose-headings:font-light prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-md prose-iframe:rounded-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;