
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; 
import { getSingleBlog } from "../api/blogApi"; 
import { FaUser, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getSingleBlog(id);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setBlog(null); // ensure blog is null if fetch fails
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog(); // fetch only if id exists
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <p className="max-w-3xl mx-auto py-24 px-6 text-center text-gray-600">
        Blog post not found.
      </p>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white min-h-screen pt-20"
    >
      {/* Featured Image */}
      {blog.image && (
        <div className="w-full h-96 overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 flex items-center gap-1">
          <FaTag /> {blog.category || "General"}
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-12 border-b pb-6">
          <span className="flex items-center gap-1">
            <FaUser /> {blog.author || "GMI Admin"}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Date TBD"}
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> 5 min read
          </span>
        </div>

        {/* Content */}
        <div className="space-y-7 text-gray-800 text-lg leading-relaxed">
          {blog.content && blog.content.trim() !== "" ? (
            blog.content
              .split("\n")
              .filter(line => line.trim() !== "")
              .map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>No content available for this post.</p>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
