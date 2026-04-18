import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  features,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1a8a7a]/30 hover:shadow-xl hover:shadow-[#1a8a7a]/5 transition-all duration-300">
      {/* Icon */}
      <div className="w-16 h-16 bg-[#1a8a7a]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a8a7a] transition-colors duration-300">
        <Icon className="w-8 h-8 text-[#1a8a7a] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a8a7a] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 line-clamp-3">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-[#1a8a7a] rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        to={href}
        className="inline-flex items-center gap-2 text-[#1a8a7a] font-medium hover:gap-3 transition-all"
      >
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
