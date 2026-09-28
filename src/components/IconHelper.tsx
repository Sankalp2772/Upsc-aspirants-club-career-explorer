import React from 'react';
import {
  Landmark,
  ShieldAlert,
  Building2,
  Award,
  Coins,
  Train,
  Cpu,
  Shield,
  Atom,
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Scale,
  GraduationCap,
  Layers,
  FileText,
  Clock,
  Briefcase,
  ExternalLink,
  Info,
  Maximize2,
  Minimize2,
  Grid,
  Menu,
  X,
  Monitor,
  Tv,
  ZoomIn,
  ZoomOut,
  TrendingUp,
  TrendingDown,
  TreePine,
  Wrench,
  Sparkles,
  MapPin,
  AlertCircle,
  Calendar
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const ChapterIcon: React.FC<IconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Landmark':
      return <Landmark className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Train':
      return <Train className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Atom':
      return <Atom className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'TreePine':
      return <TreePine className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export {
  Landmark,
  ShieldAlert,
  Building2,
  Award,
  Coins,
  Train,
  Cpu,
  Shield,
  Atom,
  Compass,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Scale,
  GraduationCap,
  Layers,
  FileText,
  Clock,
  Briefcase,
  ExternalLink,
  Info,
  Maximize2,
  Minimize2,
  Grid,
  Menu,
  X,
  Monitor,
  Tv,
  ZoomIn,
  ZoomOut,
  TrendingUp,
  TrendingDown,
  TreePine,
  Wrench,
  Sparkles,
  MapPin,
  AlertCircle,
  Calendar
};
