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

// Custom Female Icon Component
const FemaleIcon: SvgIconComponent = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="24px" 
    viewBox="0 -960 960 960" 
    width="24px" 
    fill="currentColor"
    {...props}
  >
    <path d="M440-120v-80h-80v-80h80v-84q-79-14-129.5-75.5T260-582q0-91 64.5-154.5T480-800q91 0 155.5 63.5T700-582q0 81-50.5 142.5T520-364v84h80v80h-80v80h-80Zm40-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
  </svg>
)

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
  'woman': FemaleIcon,
  
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