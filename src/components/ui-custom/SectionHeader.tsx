interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
          light ? 'text-[#1a8a7a]' : 'text-[#1a8a7a]'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-white/80' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}
      <div className={`flex items-center gap-2 mt-6 ${centered ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 bg-[#1a8a7a] rounded-full"></div>
        <div className="w-3 h-1 bg-[#1a8a7a]/50 rounded-full"></div>
        <div className="w-3 h-1 bg-[#1a8a7a]/30 rounded-full"></div>
      </div>
    </div>
  );
}
