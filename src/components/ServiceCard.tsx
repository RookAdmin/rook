
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white p-8 rounded-xl border-0 hover:shadow-premium transition-all duration-300 h-full flex flex-col">
        <div className="mb-6 text-[#0096d4] bg-[#f8fafc] p-4 inline-flex items-center justify-center rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#0096d4] transition-colors">{title}</h3>
        <p className="text-gray-500 flex-grow text-sm mb-6">{description}</p>
        <div className="flex items-center text-[#0096d4] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-sm">Explore</span>
          <ArrowRightIcon className="h-4 w-4 ml-1.5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
