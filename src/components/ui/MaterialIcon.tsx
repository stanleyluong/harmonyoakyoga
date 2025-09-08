import { SvgIconComponent } from '@mui/icons-material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'
import ComputerIcon from '@mui/icons-material/Computer'
import FavoriteIcon from '@mui/icons-material/Favorite'
import GroupIcon from '@mui/icons-material/Group'
import HandshakeIcon from '@mui/icons-material/Handshake'
import HomeIcon from '@mui/icons-material/Home'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import NightlightIcon from '@mui/icons-material/Nightlight'
import SecurityIcon from '@mui/icons-material/Security'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import SpaIcon from '@mui/icons-material/Spa'
import WarningIcon from '@mui/icons-material/Warning'

interface MaterialIconProps {
  name: string
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'
}

const iconMap: Record<string, SvgIconComponent> = {
  // Service icons
  'yoga': SelfImprovementIcon,
  'group': GroupIcon,
  'computer': ComputerIcon,
  'moon': NightlightIcon,
  'candle': CandlestickChartIcon,
  'music': MusicNoteIcon,
  // 'woman': FemaleIcon,
  
  // Value icons
  'security': SecurityIcon,
  'growth': LocalFloristIcon,
  'healing': FavoriteIcon,
  'handshake': HandshakeIcon,
  
  // Other icons
  'warning': WarningIcon,
  'sparkles': AutoAwesomeIcon,
  'spa': SpaIcon,
  'lotus': SpaIcon, // Using spa icon for lotus
  'home': HomeIcon,
  'self_care': SelfImprovementIcon, // Self care icon
  'favorite': FavoriteIcon, // Heart/favorite icon
}

const sizeMap = {
  xs: 'text-sm',
  sm: 'text-base',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-4xl',
  small: 'text-lg',
  medium: 'text-2xl', 
  large: 'text-4xl'
}

export default function MaterialIcon({ name, className = '', size = 'md' }: MaterialIconProps) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return <SelfImprovementIcon className={`${sizeMap[size]} ${className}`} />
  }
  
  return <IconComponent className={`${sizeMap[size]} ${className}`} />
}