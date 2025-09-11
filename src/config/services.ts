import { SvgIconComponent } from '@mui/icons-material'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'
import ComputerIcon from '@mui/icons-material/Computer'
import FavoriteIcon from '@mui/icons-material/Favorite'
import GroupIcon from '@mui/icons-material/Group'
import PersonIcon from '@mui/icons-material/Person'

export interface Service {
  id: string
  name: string
  description: string
  shortDescription: string
  features: string[]
  pricing?: string
  icon: SvgIconComponent
}

export const services: Service[] = [
  {
    id: 'private-yoga',
    name: 'Private Yoga Sessions',
    shortDescription: 'Personalized one-on-one yoga practice tailored to your unique needs and goals.',
    description: 'Experience the transformative power of personalized yoga with our private sessions. Each session is carefully crafted to meet your individual needs, whether you\'re a beginner seeking foundational knowledge or an experienced practitioner looking to deepen your practice.',
    features: [
      'Customized sequences for your body and goals',
      'Personalized attention and adjustments',
      'Flexible scheduling to fit your lifestyle',
      'Safe space to explore and grow',
      'Modifications for injuries or limitations'
    ],

    icon: PersonIcon
  },
  {
    id: 'small-groups',
    name: 'Small Group Classes',
    shortDescription: 'Intimate group sessions fostering connection and community in your yoga journey.',
    description: 'Join our small group classes for a more intimate yoga experience. With limited class sizes, you\'ll receive personalized attention while building connections with fellow practitioners in a supportive environment.',
    features: [
      'Maximum 6 students per class',
      'Personalized modifications and guidance',
      'Community building and support',
      'Various skill levels welcome',
      'Regular class schedules available'
    ],

    icon: GroupIcon
  },
  {
    id: 'private-groups',
    name: 'Private Groups',
    shortDescription: 'Exclusive group sessions for friends, family, or colleagues in a private setting.',
    description: 'Gather your friends, family, or colleagues for a private group yoga experience. These exclusive sessions offer the intimacy of a private class with the energy and connection of practicing together.',
    features: [
      'Exclusive private group setting',
      'Customized for your group\'s needs',
      'Flexible scheduling',
      'Perfect for special occasions',
      'Team building and bonding'
    ],
    icon: GroupIcon
  },
  {
    id: 'online-sessions',
    name: 'Online Sessions',
    shortDescription: 'Practice yoga from the comfort of your home with live virtual sessions.',
    description: 'Can\'t make it to the studio? No problem! Our online sessions bring the Harmony Oak experience directly to your home. Enjoy live, interactive classes with real-time guidance and community connection.',
    features: [
      'Live interactive sessions via Zoom',
      'Real-time guidance and adjustments',
      'Practice from anywhere',
      'Recorded sessions available',
      'Same quality instruction as in-person'
    ],
    icon: ComputerIcon
  },
  {
    id: 'womens-gatherings',
    name: 'Women\'s Gatherings',
    shortDescription: 'Sacred circles celebrating feminine energy, wisdom, and sisterhood.',
    description: 'Join our monthly women\'s gatherings to connect with your inner wisdom and build meaningful relationships with other women. These sacred circles combine yoga, meditation, and ritual to honor the feminine spirit.',
    features: [
      'Monthly themed gatherings',
      'Yoga and meditation practices',
      'Sacred ritual and ceremony',
      'Sisterhood and community building',
      'New moon and full moon celebrations'
    ],
    icon: FavoriteIcon
  },
  {
    id: 'holistic-ceremonies',
    name: 'Holistic Ceremonies',
    shortDescription: 'Transformative ceremonial experiences for life transitions and healing.',
    description: 'Mark important life transitions and milestones with our holistic ceremonies. These sacred experiences combine ancient wisdom with modern healing practices to support your journey of transformation.',
    features: [
      'Life transition ceremonies',
      'Seasonal celebrations',
      'Healing and release rituals',
      'Personalized ceremonial design',
      'Integration support and guidance'
    ],
    icon: CandlestickChartIcon
  }
]