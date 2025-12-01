import { Link, useLocation } from "react-router-dom";

export const CATEGORIES = [
  "All",
  "Innovation at Rook",
  "Design & Experience",
  "Product Deep Dives",
  "Security & Trust",
  "Digital Wellness",
  "Future of Work & Creativity",
  "Developer & Partner Ecosystem",
  "Our People & Culture",
  "Field Notes",
  "Platform & Performance",
];

type CategoriesProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const Categories = ({
  selectedCategory,
  onCategoryChange,
}: CategoriesProps) => {
  const location = useLocation();

  return (
    <div className="w-96 sticky top-28 h-fit">
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
      <button
      key={category}
      onClick={() => {
        const params = new URLSearchParams(location.search);
        if (category === "All") {
          params.delete("category");
        } else {
          params.set("category", category);
        }
        window.history.pushState(
          null,
          "",
          `${location.pathname}?${params.toString()}`
        );
        onCategoryChange(category);
      }}
      className={`
        w-full text-left px-4 py-2 rounded-md transition-all duration-300
        ${
          selectedCategory === category
            ? "bg-[#121212] text-white"
            : "hover:bg-gray-200 text-gray-700"
        }
      `}
    >
      {category}
    </button>
    
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
