export const siteConfig = {
  name: "Harmony Oak Yoga",
  tagline: "Creating a safe space 🧘🏽‍♀️ Huntsville Al 🪷",
  description: "Professional yoga studio in Huntsville, Alabama offering private sessions, small groups, online classes, women's gatherings, holistic ceremonies, and sound healing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://harmonyoakstudio.netlify.app", // Will be updated with actual domain
  
  contact: {
    email: "jentostado@gmail.com", // Update with actual email
    phone: "(425) 414-6054", // Update with actual phone
    address: "Huntsville, Alabama", // Update with actual address
    instagram: "https://instagram.com/harmonyoakstudio", // Update with actual Instagram
  },
  

  
  // Navigation menu items
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Book", href: "/book" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
}