export interface Testimonial {
  id: string
  name: string
  text: string
  service?: string
  anonymous?: boolean
  serviceId?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'holly-roberson',
    name: 'Holly Roberson',
    text: 'I am so grateful to have been part of the women\'s circles that Jenny hosts! She has such a kind heart and puts so much effort into making each gathering meaningful and unique. The community of women I found has been so special and came at just the right time for me. Jenny leads the women\'s circles with wisdom and compassion, and you leave feeling connected to something bigger than yourself. I\'m so thankful for Jenny, her heart for community, and this space she has created for women to connect.',
    anonymous: false
  },
  {
    id: 'lorin-vilay',
    name: 'Lorin Vilay',
    text: 'Jenny has renewed my love for yoga. She helped me beginning in Washington state and I continue to learn from her through video meetings. She has helped me practice both yoga and self healing and has a very peaceful approach. I always end the practice feeling good.',
    anonymous: false
  },
  {
    id: 'kyra-gregory',
    name: 'Kyra Gregory',
    text: 'I am so grateful for you. For creating this beautiful space & for putting so much of your essence into it. Your circle is growing so beautifully & I absolutely love being apart of the unfolding of all you will offer us. Honored to call you my sister!! I love you & im so happy to be apart.',
    anonymous: false
  },
  {
    id: 'kathryn-dunbar',
    name: 'Kathryn Dunbar',
    text: 'Thank you so much for gifting us with such a thoughtful and beautiful experience! You\'re an incredible guide and I\'m so looking forward to carrying this energy and light into the coming weeks.',
    anonymous: false
  },
  {
    id: 'daria-pavoni',
    name: 'Daria Pavoni',
    text: 'Jennifer is amazing! Her yoga classes are completely different from anything I\'ve tried before. She really takes the time to listen to what I need, and that makes a huge difference. I always feel like the class is for me, not just a routine she\'s teaching. Her style is super calming, and I\'m finally able to relax during yoga, something I struggled with before. She\'s also helped me improve my flexibility. If you\'re looking for a yoga instructor who truly cares and creates a space where you can grow, relax, and feel good in your body, Jennifer is the one!',
    anonymous: false
  },
  {
    id: 'michelle-alar',
    name: 'Michelle Alar',
    text: 'I\'ve been working with Jennifer for private yoga and somatic healing, and it has truly changed my life. She takes so much care in creating a session that feels safe, personal, and exactly what I need that day. The somatic work has helped me release stress and emotions stored in my body, while the yoga has gently strengthened me and given me more balance. I always leave her studio feeling calm, lighter, and deeply cared for. I can\'t recommend her enough.',
    anonymous: false
  },
  {
    id: 'rachelle-l',
    name: 'Rachelle L.',
    text: 'I wasn\'t sure what to expect but working with Jennifer has been incredible. She made me feel completely comfortable and guided me through movements that helped with my tightness and stress. It is so relaxing and really refreshes my day. Highly recommended!',
    anonymous: false
  }
]