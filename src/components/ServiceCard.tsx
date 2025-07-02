import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  target?: string;
  rel?: string;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  link,
  target,
  rel,
}: ServiceCardProps) => {
  return (
    <a href={link} target={target} rel={rel} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="relative h-full bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 group"
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0096d4] to-[#00c2ff] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon wrapper */}
        <div className="relative mb-6 inline-flex">
          <div className="absolute inset-0 bg-[#0096d4]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          <div className="relative bg-gradient-to-b from-white to-gray-50 p-4 rounded-full border border-gray-100 group-hover:border-[#0096d4]/20 transition-colors duration-300">
            <div className="text-[#0096d4] transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#0096d4] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center text-[#0096d4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Learn more</span>
          <ArrowRightIcon className="h-4 w-4 ml-1.5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </a>
  );
};
