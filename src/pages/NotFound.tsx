import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DocumentMeta from "react-document-meta";

const NotFound = () => {
  const location = useLocation();
  const meta = {
    title: "404 - Page Not Found | Rook",
    description:
      "The page you are looking for could not be found. Please check the URL or return to the homepage.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Rook 404, page not found, error page",
      },
    },
  };

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default NotFound;
