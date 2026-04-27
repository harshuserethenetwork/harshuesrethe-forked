import {
  LuCodeXml,
  LuLayoutDashboard,
  LuApple,
  LuPencilRuler,
} from 'react-icons/lu';

const homeData = {
  imageLogos: [
    {
      text: 'Designing',
      src: '',
      alt: 'Designing',
      href: 'https://company1.com',
    },
    { text: 'Graphics', src: '', alt: 'UI/UX', href: 'https://company2.com' },
    { text: 'Backend', src: '', alt: 'System', href: 'https://company3.com' },
  ],

  chipLogos: [
    {
      id: 1,
      label: 'React',
      image: '/images/chipsImages/React.js.svg',
    },
    {
      id: 2,
      label: 'Next.js',
      image: '/images/chipsImages/Next.js.svg',
    },
    {
      id: 3,
      label: 'Redux',
      image: '/images/chipsImages/Redux.svg',
    },
    {
      id: 4,
      label: 'Node.js',
      image: '/images/chipsImages/Node.js.svg',
    },
    {
      id: 5,
      label: 'Express.js',
      image: '/images/chipsImages/Express.js.svg',
    },
    {
      id: 6,
      label: 'MySQL',
      image: '/images/chipsImages/MySQL.svg',
    },
    {
      id: 7,
      label: 'MongoDB',
      image: '/images/chipsImages/MongoDB.svg',
    },
    {
      id: 8,
      label: 'PostgreSQL',
      image: '/images/chipsImages/PostgreSQL.svg',
    },
    {
      id: 9,
      label: 'Docker',
      image: '/images/chipsImages/Docker.svg',
    },
    {
      id: 10,
      label: 'Firebase',
      image: '/images/chipsImages/Firebase.svg',
    },
    {
      id: 11,
      label: 'AWS',
      image: '/images/chipsImages/AWS.svg',
    },
    {
      id: 12,
      label: 'GSAP',
      image: '/images/chipsImages/GSAP.svg',
    },
    {
      id: 13,
      label: 'Framer Motion',
      image: '/images/chipsImages/FramerMotion.svg',
    },
    {
      id: 14,
      label: 'Tailwind CSS',
      image: '/images/chipsImages/TailwindCSS.svg',
    },
    {
      id: 15,
      label: 'GIT',
      image: '/images/chipsImages/GIT.svg',
    },
    {
      id: 16,
      label: 'HTML',
      image: '/images/chipsImages/HTML.svg',
    },
    {
      id: 17,
      label: 'CSS',
      image: '/images/chipsImages/CSS.svg',
    },
    {
      id: 18,
      label: 'JavaScript',
      image: '/images/chipsImages/JavaScript.svg',
    },
    {
      id: 19,
      label: 'TypeScript',
      image: '/images/chipsImages/TypeScript.svg',
    },
  ],

  projects: [
    {
      title: 'Flight Information Display System',
      tag: 'Development',
      year: '2025',
      link: 'https://github.com/HarshUserethe/FIDS--Flight-Information-Display-System',
      bg: 'rgba(254 243 199)',
      img: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777048153/PRJ006_fewjvm.png',
      margin: '0%',
    },
    {
      title: 'Local Hire',
      tag: 'Development & Design',
      year: '2024',
      link: 'https://github.com/HarshUserethe/LocalHire-Jobs-Portal',
      bg: 'rgba(251 207 232)',
      img: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png',
      margin: '10%',
    },
    {
      title: 'Ward Management',
      tag: 'Development & Design',
      year: '2024',
      link: 'https://github.com/HarshUserethe/Ward-WorkStation',
      bg: 'rgba(231 229 228)',
      img: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ004_l3jvty.png',
      margin: '0%',
    },
    {
      title: 'Amazon Clone',
      tag: 'Development & Design',
      year: '2022',
      link: 'https://github.com/HarshUserethe/AmazonClone-WebApp',
      bg: 'rgba(187 247 208)',
      img: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ003_ajqwrh.png',
      margin: '10%',
    },
  ],

  services: [
    {
      id: '01',
      icon: LuCodeXml,
      title: 'Development',
      description:
        'Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.',
      pic: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '02',
      icon: LuLayoutDashboard,
      title: 'UI/UX Design',
      description:
        'Designing user-centric, modern interfaces that shapes how the audience interacts with the product.',
      pic: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '03',
      icon: LuApple,
      title: 'Branding',
      description:
        'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',
      pic: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '04',
      icon: LuPencilRuler,
      title: 'Graphic Design',
      description:
        'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',
      pic: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Divya Walia',
      role: 'Senior Java Developer @Nagarro',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'I am writing to highly recommend Devraj for any Java fullstackrole. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the applicatio...',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Tech Lead @Microsoft',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Working with this developer has been an absolute pleasure. Their expertise in full-stack development and ability to solve complex problems efficiently is truly impressive. They consistently deliver high-quality code and are always willing to go the extra mile...',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Product Manager @Google',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'An exceptional developer who combines technical excellence with great communication skills. They have been instrumental in delivering our most critical features on time and have shown remarkable leadership qualities throughout our collaboration...',
      linkedin: 'https://linkedin.com',
    },
  ],
};

const projectsData = [
  {
    id: 1,
    title: 'Flight Information Display System',
    category: 'development',
    date: '2025',
    link: 'https://github.com/HarshUserethe/FIDS--Flight-Information-Display-System',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777048153/PRJ006_fewjvm.png', // Replace with your actual image path
  },

  {
    id: 2,
    title: 'Local Hire',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/LocalHire-Jobs-Portal',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png', // Replace with your actual image path
  },
  {
    id: 3,
    title: 'Amazon Clone',
    category: 'development',
    date: '2022',
    link: 'https://github.com/HarshUserethe/AmazonClone-WebApp',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ003_ajqwrh.png', // Replace with your actual image path
  },
  {
    id: 4,
    title: 'CricMagic',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/CricMagic-NextJS',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777277152/PROJ008_wimuuh.png', // Replace with your actual image path
  },
  {
    id: 5,
    title: 'Ward Management',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/Ward-WorkStation',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ004_l3jvty.png', // Replace with your actual image path
  },
  {
    id: 6,
    title: 'Spotify Clone',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/SpotifyClone-NodeJS',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047889/PRJ005_sznpjn.png', // Replace with your actual image path
  },
  {
    id: 7,
    title: 'Awwwards Inspiration',
    category: 'design',
    date: '2022',
    link: 'https://github.com/HarshUserethe/RocketAir-Clone',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777054472/PRJ007_u5ltju.png', // Replace with your actual image path
  },
];

const aboutData = [{ hero_image_url: '', resume_url: '' }];

const contactData = [{ hero_image_url: '' }];

export { homeData, projectsData, aboutData, contactData };
