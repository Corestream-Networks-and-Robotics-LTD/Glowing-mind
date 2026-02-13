
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../api/blogApi";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-300 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-blue-700">
            Insights & Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Research, impact stories, and thought leadership from Glowing Minds
            Initiatives.
          </p>
        </header>

        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts yet.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default BlogList;
