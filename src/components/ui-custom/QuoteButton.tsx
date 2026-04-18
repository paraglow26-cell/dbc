import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface QuoteButtonProps {
  productId?: string;
  productName?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

export default function QuoteButton({
  productId,
  productName,
  variant = 'default',
  size = 'default',
  className = '',
  children,
}: QuoteButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const params = new URLSearchParams();
    if (productId) params.set('product', productId);
    if (productName) params.set('productName', productName);
    navigate(`/devis?${params.toString()}`);
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`${className}`}
    >
      <FileText className="w-4 h-4 mr-2" />
      {children || 'Demander un devis'}
    </Button>
  );
}
