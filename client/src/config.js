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

// config/projectsData.js  (or wherever your config lives)
// Added: description, tags, liveLink, coffeeLink, screenshots
// Existing fields (id, title, category, date, link, image) are untouched.

export const projectsData = [
  {
    id: 1,
    title: 'Flight Information Display System',
    category: 'development',
    date: '2025',
    link: 'https://github.com/HarshUserethe/FIDS--Flight-Information-Display-System',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777048153/PRJ006_fewjvm.png',

    tagline:
      'A comprehensive airport display solution delivering real-time flight updates, multilingual communication, and automated announcements to enhance passenger experience, streamline airport operations, and ensure accurate information flow across all airport touchpoints.',

    description: [
      {
        type: 'heading',
        content:
          'What is Flight Information Display System (FIDS) and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'The Flight Information Display System (FIDS) is a centralized airport management solution designed to provide real-time flight information to passengers and airport staff. It helps airports manage and display critical operational data such as flight arrivals, departures, baggage claim details, check-in counters, and automated announcements across multiple display systems and kiosks.',
      },
      {
        type: 'paragraph',
        content:
          'The primary goal of FIDS is to improve passenger communication, reduce confusion during travel, and streamline airport operations through accurate and continuously updated flight information. The system supports multilingual communication, automated announcements, and baggage handling integration, making it suitable for modern airport environments with high passenger traffic.',
      },
      {
        type: 'paragraph',
        content:
          'FIDS enables airport authorities and operational staff to efficiently manage flight-related activities while ensuring passengers receive timely and reliable information throughout their airport journey.',
      },
      {
        type: 'heading',
        content: 'Arrival Display System',
      },
      {
        type: 'paragraph',
        content:
          'The Flight Arrival Display System provides passengers and airport staff with real-time updates about incoming flights. It displays essential information such as flight numbers, scheduled arrival times, estimated arrival times, and the current status of flights, including delayed, landed, or cancelled flights.',
      },
      {
        type: 'heading',
        content: 'Departure Display System',
      },
      {
        type: 'paragraph',
        content:
          'The Flight Departure Display System manages and displays real-time departure information for outgoing flights. It provides passengers with details such as estimated departure times, boarding gates, flight status, and boarding updates.',
      },

      {
        type: 'heading',
        content: 'Check-In Counter Display System',
      },
      {
        type: 'paragraph',
        content:
          'The Check-In Counter Display System assists passengers during the check-in process by displaying airline-specific and flight-specific information at airport counters. It provides details including airline name, flight number, passenger class, and assigned check-in counters. This helps passengers identify the correct counters quickly and reduces congestion in busy airport terminals.',
      },

      {
        type: 'heading',
        content: 'Baggage Claim Display System',
      },
      {
        type: 'paragraph',
        content:
          'The Baggage Claim Display System provides passengers with real-time information related to baggage collection after flight arrival. It displays assigned baggage belt numbers, estimated baggage delivery timings, and timestamps for the first and last bags delivered. The system also includes a directory of baggage claim facilities to assist passengers in locating their designated baggage areas efficiently.',
      },
      {
        type: 'heading',
        content: 'Baggage Claim Software Module',
      },
      {
        type: 'paragraph',
        content:
          'The Baggage Claim Software Module automates baggage belt allocation and baggage handling operations within the airport. The system automatically assigns baggage belt numbers to arriving flights and updates timestamps for baggage loading and unloading processes. It integrates with baggage handling systems to ensure smooth coordination between flight arrivals and baggage operations. Authorized airport personnel can manage and monitor baggage operations through a secure client workstation interface.',
      },
      {
        type: 'heading',
        content: 'Automatic Flight Announcement System',
      },
      {
        type: 'paragraph',
        content:
          'The Automatic Flight Announcement System generates and broadcasts real-time flight announcements throughout the airport. The system scans the flight information database, identifies important operational updates, and automatically converts announcement text into voice-based public announcements The feature supports Hindi/English voice announcements, ensuring that passengers receive important travel information in both languages.',
      },
    ],

    tags: [
      'React',
      'Material UI',
      'Node.js',
      'PHP',
      'MySQL',
      'MongoDB',
      'REST API',
      'WebSocket',
    ],

    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',

    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777048153/PRJ006_fewjvm.png',
        alt: 'FIDS board main view',
      },
    ],
  },

  {
    id: 2,
    title: 'Local Hire',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/LocalHire-Jobs-Portal',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png',

    tagline: 'A hyperlocal job portal for blue-collar workers',
    description: [
      {
        type: 'heading',
        content: 'What is LocalHire and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'LocalHire is a modern full-stack job recruitment platform developed using the MERN stack architecture. The platform is designed to connect job seekers and organizations through a centralized hiring ecosystem that simplifies the recruitment process for both parties.',
      },
      {
        type: 'paragraph',
        content:
          'The application follows a strict Domain-Driven Architecture to maintain scalability, clean code organization, and modular development practices. It provides two completely separate user experiences for Aspirants (Job Seekers) and Organizations (Employers), ensuring that each user role has access to features and workflows specifically designed for their needs.',
      },
      {
        type: 'paragraph',
        content:
          'LocalHire focuses on improving recruitment efficiency by offering intelligent job recommendations, real-time application tracking, secure authentication mechanisms, and responsive profile management tools. The platform is designed to deliver a smooth and secure hiring experience while maintaining high performance and scalability.',
      },

      {
        type: 'heading',
        content: 'Role-Based Dashboard System',
      },
      {
        type: 'paragraph',
        content:
          'The Role-Based Dashboard System provides completely isolated user experiences for Aspirants and Organizations. Job seekers can manage profiles, browse jobs, and track applications, while employers can manage company profiles, post job openings, and review applicants.',
      },
      {
        type: 'paragraph',
        content:
          'The dashboard architecture ensures proper access control, improves usability, and creates a personalized workflow for each user type. All routes and functionalities are protected using role-based authorization mechanisms.',
      },

      {
        type: 'heading',
        content: 'Smart Job Recommendation Engine',
      },
      {
        type: 'paragraph',
        content:
          'The Smart Recommendation Engine dynamically suggests relevant job opportunities to Aspirants based on a custom matching algorithm. The system analyzes multiple parameters including user skills, preferred job categories, and preferred locations to generate personalized job recommendations.',
      },
      {
        type: 'paragraph',
        content:
          'This feature helps users discover more relevant opportunities efficiently while improving overall engagement and job matching accuracy within the platform.',
      },

      {
        type: 'heading',
        content: 'Application Tracking System',
      },
      {
        type: 'paragraph',
        content:
          'The Application Tracking System allows Aspirants to monitor the complete lifecycle of their job applications in real time. Users can view the current status of each application, including Applied, Under Review, Shortlisted, Hired, or Rejected.',
      },
      {
        type: 'paragraph',
        content:
          'This feature improves transparency in the hiring process and helps applicants stay informed about their recruitment progress without requiring manual follow-ups.',
      },

      {
        type: 'heading',
        content: 'Centralized Activity Logging System',
      },
      {
        type: 'paragraph',
        content:
          'The Centralized Activity Logging System tracks important user activities across the platform using an asynchronous and non-blocking architecture. Actions such as user logins, profile updates, and job applications are automatically recorded and displayed within the Recent Activity timeline.',
      },
      {
        type: 'paragraph',
        content:
          'The logging system improves user engagement and provides better operational visibility without impacting application performance.',
      },

      {
        type: 'heading',
        content: 'Dynamic Profile Wizard',
      },
      {
        type: 'paragraph',
        content:
          'The Dynamic Profile Wizard provides users with a multi-step profile creation and management experience. The system preserves form state during navigation and uses responsive Material UI components to ensure a smooth and user-friendly interface across devices.',
      },
      {
        type: 'paragraph',
        content:
          'This feature simplifies profile completion for users while improving data organization and overall user experience.',
      },

      {
        type: 'heading',
        content: 'Authentication and Security System',
      },
      {
        type: 'paragraph',
        content:
          'The platform implements multiple security mechanisms to ensure secure authentication and data protection. Authentication is handled using JWT-based HttpOnly cookies, while passwords are securely encrypted using bcrypt.',
      },
      {
        type: 'paragraph',
        content:
          'Additional security measures include rate-limited APIs, NoSQL injection protection, secure route guards, and role-based authorization systems to prevent unauthorized access and improve application reliability.',
      },

      {
        type: 'heading',
        content: 'Database Optimization and Scalability',
      },
      {
        type: 'paragraph',
        content:
          'The backend architecture is designed for scalability and performance using MongoDB and Mongoose with optimized compound indexing strategies. The indexing structure improves query performance for job searches, filtering operations, and recommendation generation.',
      },
      {
        type: 'paragraph',
        content:
          'The modular backend structure and domain-driven design make the application maintainable, scalable, and suitable for large-scale recruitment workflows.',
      },

      {
        type: 'heading',
        content: 'Technology Stack',
      },
      {
        type: 'paragraph',
        content:
          'Frontend technologies include React 18 with Vite, Material UI, Axios, React Router, date-fns, and React Hot Toast for building a responsive and interactive user interface.',
      },
      {
        type: 'paragraph',
        content:
          'Backend development is powered by Node.js and Express.js with JWT authentication and bcrypt-based password encryption. MongoDB and Mongoose are used for database management and schema modeling.',
      },
    ],
    tags: ['React', 'Node', 'Express', 'MongoDB', 'Geolocation API'],
    liveLink: 'https://google.com/',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png',
        alt: 'Local Hire home',
      },
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png',
        alt: 'Local Hire home',
      },
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ002_npfasx.png',
        alt: 'Local Hire home',
      },
    ],
  },

  {
    id: 3,
    title: 'Amazon Clone',
    category: 'development',
    date: '2022',
    link: 'https://github.com/HarshUserethe/AmazonClone-WebApp',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ003_ajqwrh.png',

    tagline:
      'Amazon Clone is a full-stack e-commerce platform featuring role-based authentication for Customers and Vendors. Customers can browse products, manage carts, place orders, complete payments using Razorpay, and track orders in real time, while vendors can manage products, inventory, and customer orders through a dedicated dashboard.',
    description: [
      {
        type: 'heading',
        content: 'What is Amazon Clone and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'Amazon Clone is a full-stack e-commerce platform inspired by modern online marketplace applications. The platform allows customers to browse products, add items to cart, place orders, and securely complete payments, while vendors can manage products, sales, and customer orders through a dedicated dashboard.',
      },
      {
        type: 'paragraph',
        content:
          'The application is designed with a role-based architecture that provides separate experiences for Customers and Vendors. Customers can explore and purchase products, while vendors can manage inventory, track orders, and handle product-related operations through an administrative interface.',
      },
      {
        type: 'paragraph',
        content:
          'The platform focuses on delivering a scalable and secure online shopping experience with real-time order tracking, payment gateway integration, and centralized order management workflows.',
      },

      {
        type: 'heading',
        content: 'Role-Based Authentication System',
      },
      {
        type: 'paragraph',
        content:
          'The application implements a role-based authentication and authorization system for Customers and Vendors. Secure login and registration workflows ensure that users can access only the features and dashboards assigned to their roles.',
      },
      {
        type: 'paragraph',
        content:
          'Customers can browse products, manage carts, and place orders, while vendors can manage product listings, monitor sales, and process customer orders through a dedicated vendor management interface.',
      },

      {
        type: 'heading',
        content: 'Product Browsing and Shopping System',
      },
      {
        type: 'paragraph',
        content:
          'The Product Browsing System allows customers to explore available products through an organized and user-friendly interface. Users can view product details, pricing, and product-related information before making purchase decisions.',
      },
      {
        type: 'paragraph',
        content:
          'The responsive shopping experience improves usability and allows customers to easily discover and purchase products from different vendors.',
      },

      {
        type: 'heading',
        content: 'Cart and Order Placement System',
      },
      {
        type: 'paragraph',
        content:
          'The Cart Management System enables customers to add products to their shopping cart, update quantities, and manage selected items before checkout. The order placement workflow streamlines the purchasing process and provides users with a smooth checkout experience.',
      },
      {
        type: 'paragraph',
        content:
          'The platform securely stores order information and maintains complete purchase records for both customers and vendors.',
      },

      {
        type: 'heading',
        content: 'Razorpay Payment Gateway Integration',
      },
      {
        type: 'paragraph',
        content:
          'The application integrates Razorpay as the payment gateway to enable secure online transactions. Customers can complete payments through a secure and reliable payment processing workflow during checkout.',
      },
      {
        type: 'paragraph',
        content:
          'The payment integration ensures smooth transaction handling while improving trust, security, and convenience for online purchases.',
      },

      {
        type: 'heading',
        content: 'Real-Time Order Tracking System',
      },
      {
        type: 'paragraph',
        content:
          'The Order Tracking System allows customers to monitor the status of their purchases in real time. Users can track different stages of the order lifecycle including order confirmation, processing, shipping, and delivery updates.',
      },
      {
        type: 'paragraph',
        content:
          'This feature improves transparency and enhances the customer experience by keeping users informed throughout the order fulfillment process.',
      },

      {
        type: 'heading',
        content: 'Vendor Product and Order Management',
      },
      {
        type: 'paragraph',
        content:
          'The Vendor Management System allows vendors to upload products, manage inventory, update product details, and monitor incoming customer orders through a centralized dashboard.',
      },
      {
        type: 'paragraph',
        content:
          'Vendors can efficiently manage order processing workflows, review customer purchases, and maintain product availability, enabling smooth marketplace operations within the platform.',
      },

      {
        type: 'heading',
        content: 'Scalable E-Commerce Architecture',
      },
      {
        type: 'paragraph',
        content:
          'The application architecture is designed to support scalable marketplace operations with modular backend services, secure authentication mechanisms, and responsive frontend interfaces. The system focuses on performance, security, and maintainability to deliver a reliable online shopping experience.',
      },
    ],
    tags: ['Node', 'Express', 'Firebase', 'Razorpay', 'REST API', 'Backend'],
    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ003_ajqwrh.png',
        alt: 'Amazon clone storefront',
      },
    ],
  },

  {
    id: 4,
    title: 'CricMagic',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/CricMagic-NextJS',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777277152/PROJ008_wimuuh.png',

    tagline:
      'The Cricket Blogging and Prediction WebApp is a comprehensive platform designed for cricket enthusiasts to access the latest cricket-related content, match predictions, tournament standings, fixtures, and player rankings in one place. The application combines sports blogging, statistical analysis, and interactive prediction features to create an engaging user experience while keeping users updated with real-time cricket insights across multiple formats including Test, ODI, and T20 cricket.',
    description: [
      {
        type: 'heading',
        content:
          'What is Cricket Blogging and Prediction WebApp and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'Cricket Blogging and Prediction WebApp is a full-stack cricket information and analytics platform designed for cricket enthusiasts to stay updated with the latest cricket news, match insights, predictions, rankings, and tournament statistics in one centralized application.',
      },
      {
        type: 'paragraph',
        content:
          'The platform provides real-time cricket-related content including daily blogs, match predictions, series standings, upcoming fixtures, and player and team rankings across multiple cricket formats such as Test, ODI, and T20.',
      },
      {
        type: 'paragraph',
        content:
          'The primary goal of the application is to enhance user engagement by combining cricket content, statistical insights, and prediction-based interaction into a single user-friendly experience for fans and followers of the sport.',
      },

      {
        type: 'heading',
        content: 'Daily Cricket Blogging System',
      },
      {
        type: 'paragraph',
        content:
          'The Daily Cricket Blogging System provides users with regular cricket-related articles, match analyses, tournament updates, player performances, and expert commentary. The platform allows cricket enthusiasts to stay informed about the latest happenings in the cricket world through continuously updated blog content.',
      },
      {
        type: 'paragraph',
        content:
          'This feature improves user engagement by delivering informative and interactive cricket content in a structured and easily accessible format.',
      },

      {
        type: 'heading',
        content: 'Match Prediction System',
      },
      {
        type: 'paragraph',
        content:
          'The Match Prediction System enables users to predict the outcomes of upcoming cricket matches and compare their predictions with actual results. The feature creates an interactive experience where users can actively participate in match discussions and prediction activities.',
      },
      {
        type: 'paragraph',
        content:
          'The prediction module enhances platform engagement by encouraging users to analyze team performance, player statistics, and match conditions before submitting predictions.',
      },

      {
        type: 'heading',
        content: 'Series Point Table Management',
      },
      {
        type: 'paragraph',
        content:
          'The Series Point Table Management module provides updated standings and points information for ongoing cricket tournaments and bilateral series. Users can track team rankings, total matches played, wins, losses, and overall tournament progress in real time.',
      },
      {
        type: 'paragraph',
        content:
          'This feature helps users monitor tournament performance and understand the qualification scenarios of different teams throughout the series.',
      },

      {
        type: 'heading',
        content: 'Match Fixtures and Schedule System',
      },
      {
        type: 'paragraph',
        content:
          'The Fixtures and Schedule System provides detailed information about upcoming cricket matches across multiple tournaments and formats. Users can view match schedules, teams, match timings, and tournament details through an organized fixture management interface.',
      },
      {
        type: 'paragraph',
        content:
          'This module ensures that users remain informed about upcoming matches and important cricket events without missing any scheduled games.',
      },

      {
        type: 'heading',
        content: 'Player and Team Ranking System',
      },
      {
        type: 'paragraph',
        content:
          'The Ranking System displays rankings for both players and teams across different cricket formats including Test, ODI, and T20. The platform provides updated performance rankings based on official cricket statistics and match performances.',
      },
      {
        type: 'paragraph',
        content:
          'Users can explore rankings for batsmen, bowlers, all-rounders, and international cricket teams, allowing them to analyze performance trends and compare statistics across formats.',
      },

      {
        type: 'heading',
        content: 'User Engagement and Sports Analytics',
      },
      {
        type: 'paragraph',
        content:
          'The platform combines sports blogging, prediction systems, statistical tracking, and ranking analysis to create an engaging cricket community experience. Users can interact with cricket-related content while exploring data-driven insights and tournament statistics.',
      },
      {
        type: 'paragraph',
        content:
          'The application architecture is designed to provide a responsive and scalable user experience suitable for handling continuously updated cricket information and live sports content.',
      },
    ],
    tags: ['Next.js', 'API', 'Tailwind CSS', 'Node', 'Express'],
    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777277152/PROJ008_wimuuh.png',
        alt: 'CricMagic scoreboard',
      },
    ],
  },

  {
    id: 5,
    title: 'Ward Management',
    category: 'development',
    date: '2024',
    link: 'https://github.com/HarshUserethe/Ward-WorkStation',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ004_l3jvty.png',

    tagline:
      'Ward Workstation is a web-based administration platform designed for efficient ward and society management. The application streamlines issue tracking, infrastructure management, worker assignments, and live location monitoring through Google Maps integration, improving transparency, operational efficiency, and public service delivery using role-based access control and real-time management systems.',
    description: [
      {
        type: 'heading',
        content: 'What is Ward Workstation and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'Ward Workstation is a modern web-based administration platform developed to help Ward and Society Administrations efficiently manage community operations, public infrastructure, and citizen grievances through a centralized digital system.',
      },
      {
        type: 'paragraph',
        content:
          'The application enables administrative authorities to monitor ward activities, manage important public entities, track community issues, and improve transparency in public service management. The system is designed to streamline communication between administrators, workers, and community members while ensuring efficient issue resolution workflows.',
      },
      {
        type: 'paragraph',
        content:
          'Ward Workstation combines role-based access management, real-time issue tracking, geographical mapping integration, and operational monitoring tools to create a scalable and user-friendly governance solution for local ward administrations.',
      },

      {
        type: 'heading',
        content: 'Role-Based Access Control System',
      },
      {
        type: 'paragraph',
        content:
          'The Role-Based Access Control System provides secure authentication and authorization mechanisms for different user roles including Admin, Co-admin, and Members. Each role is assigned specific permissions and operational capabilities based on administrative responsibilities.',
      },
      {
        type: 'paragraph',
        content:
          'This feature ensures secure access management while maintaining controlled visibility and operational security across the application.',
      },

      {
        type: 'heading',
        content: 'Dynamic Entity Management System',
      },
      {
        type: 'paragraph',
        content:
          'The Dynamic Entity Management System enables administrators to manage important ward infrastructure and community entities through a centralized interface. The platform supports management of hospitals, schools, colonies, and religious or community organizations such as Samitis.',
      },
      {
        type: 'paragraph',
        content:
          'This feature helps ward administrations maintain organized records of critical public and community resources while improving administrative efficiency.',
      },

      {
        type: 'heading',
        content: 'Advanced Community Issue Tracking System',
      },
      {
        type: 'paragraph',
        content:
          'The Advanced Issue Tracking System allows administrators and members to report, manage, and monitor community-related issues in real time. Issues can be assigned priorities, tracked through multiple resolution stages, and allocated to workers for execution.',
      },
      {
        type: 'paragraph',
        content:
          'The system improves operational transparency by providing structured issue management workflows and status tracking mechanisms for public grievances and maintenance activities.',
      },

      {
        type: 'heading',
        content: 'Live Location and Google Maps Integration',
      },
      {
        type: 'paragraph',
        content:
          'The Live Location System integrates Google Maps functionality to accurately identify and display issue locations within the ward. Administrators can attach Google Maps links directly while creating issues, allowing the system to extract and process precise geographical coordinates automatically.',
      },
      {
        type: 'paragraph',
        content:
          'The backend uses a dedicated API endpoint to intercept standard and shortened Google Maps URLs, follow HTTP redirects using the native fetch API, and extract location coordinates without relying on UI-blocking APIs.',
      },
      {
        type: 'paragraph',
        content:
          'On the frontend, validated coordinates are dynamically rendered as interactive embedded maps within the issue details interface. Users can also directly open locations in Google Maps through a dedicated call-to-action link.',
      },

      {
        type: 'heading',
        content: 'Worker Assignment and Resolution Management',
      },
      {
        type: 'paragraph',
        content:
          'The platform allows administrators to assign workers to specific issues and monitor the complete resolution lifecycle. Workers can manage assigned tasks while administrators can review progress, update issue statuses, and ensure timely completion of public service activities.',
      },
      {
        type: 'paragraph',
        content:
          'This structured workflow improves accountability, resource allocation, and operational coordination within ward management systems.',
      },

      {
        type: 'heading',
        content: 'Real-Time Notification System',
      },
      {
        type: 'paragraph',
        content:
          'The Real-Time Feedback System provides users with instant toast notifications for successful operations, warnings, and error handling across the platform. Notifications improve user experience by delivering immediate visual feedback during issue management and administrative operations.',
      },
      {
        type: 'paragraph',
        content:
          'The responsive notification system enhances usability and helps users quickly understand the status of their actions within the application.',
      },

      {
        type: 'heading',
        content: 'Administrative Transparency and Monitoring',
      },
      {
        type: 'paragraph',
        content:
          'Ward Workstation is designed to improve transparency and accountability in local governance through centralized monitoring and real-time operational visibility. Administrators can efficiently track ward activities, monitor issue resolution progress, and maintain organized digital records for better public service delivery.',
      },
      {
        type: 'paragraph',
        content:
          'The scalable architecture and modular system design make the platform suitable for modern digital governance and smart community management solutions.',
      },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Role-based Auth'],
    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047888/PRJ004_l3jvty.png',
        alt: 'Ward dashboard',
      },
    ],
  },

  {
    id: 6,
    title: 'Spotify Clone',
    category: 'development',
    date: '2023',
    link: 'https://github.com/HarshUserethe/SpotifyClone-NodeJS',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047889/PRJ005_sznpjn.png',

    tagline:
      'Spotify Clone is a full-stack music streaming platform that allows users to stream songs, search music, and upload personal albums through a secure authentication system. The application uses MongoDB GridFS for scalable audio file storage and delivers a responsive, modern music streaming experience with real-time playback and content management features.',
    description: [
      {
        type: 'heading',
        content: 'What is Spotify Clone and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'Spotify Clone is a full-stack music streaming platform inspired by modern digital audio applications. The platform allows users to stream music, search songs, upload albums, and manage personalized music content through an interactive and responsive web interface.',
      },
      {
        type: 'paragraph',
        content:
          'The application is designed to provide a seamless music streaming experience by combining secure user authentication, real-time audio playback, advanced search functionality, and cloud-based media storage management into a centralized platform.',
      },
      {
        type: 'paragraph',
        content:
          'The platform supports both listeners and content creators by allowing users to upload and manage their own music albums while enabling other users to browse and stream audio content efficiently.',
      },

      {
        type: 'heading',
        content: 'User Authentication and Authorization System',
      },
      {
        type: 'paragraph',
        content:
          'The Authentication System provides secure user registration and login functionality to protect user accounts and streaming data. The platform uses secure authentication mechanisms to manage user sessions and restrict unauthorized access to protected features.',
      },
      {
        type: 'paragraph',
        content:
          'Authenticated users can access personalized music content, upload albums, and manage their streaming activities securely within the application.',
      },

      {
        type: 'heading',
        content: 'Music Streaming and Audio Playback System',
      },
      {
        type: 'paragraph',
        content:
          'The Music Streaming System allows users to stream and play songs directly from the platform through an integrated audio player interface. Users can browse available tracks, control playback functionality, and listen to music in real time without downloading files locally.',
      },
      {
        type: 'paragraph',
        content:
          'The streaming module is optimized to provide smooth playback performance and responsive audio controls for an improved listening experience.',
      },

      {
        type: 'heading',
        content: 'Song Search and Discovery System',
      },
      {
        type: 'paragraph',
        content:
          'The Search System enables users to quickly discover songs, albums, and music content using dynamic search functionality. Users can search tracks by song title, album name, or artist-related information through a responsive and user-friendly interface.',
      },
      {
        type: 'paragraph',
        content:
          'This feature improves content discoverability and helps users efficiently explore available music within the platform.',
      },

      {
        type: 'heading',
        content: 'Music Album Upload and Management',
      },
      {
        type: 'paragraph',
        content:
          'The Album Management System allows authenticated users to upload and manage their own music albums directly through the platform. Users can organize tracks, upload audio files, and manage album-related metadata within a centralized dashboard.',
      },
      {
        type: 'paragraph',
        content:
          'This functionality transforms the application into a creator-friendly platform where artists and users can publish and share their music content with other listeners.',
      },

      {
        type: 'heading',
        content: 'GridFS File Storage Integration',
      },
      {
        type: 'paragraph',
        content:
          'The application integrates MongoDB GridFS for efficient storage and retrieval of large audio files. GridFS enables the platform to handle music uploads and streaming operations without relying on traditional file system storage.',
      },
      {
        type: 'paragraph',
        content:
          'This approach improves scalability, file management, and streaming performance while ensuring reliable handling of large media assets within the database infrastructure.',
      },

      {
        type: 'heading',
        content: 'Responsive User Interface and User Experience',
      },
      {
        type: 'paragraph',
        content:
          'The platform features a responsive and interactive user interface designed to deliver a modern music streaming experience across multiple devices. Users can seamlessly navigate between songs, albums, playlists, and search results through an optimized UI structure.',
      },
      {
        type: 'paragraph',
        content:
          'The application architecture focuses on performance, usability, and smooth user interaction to provide a streaming experience similar to modern commercial music platforms.',
      },
    ],
    tags: ['Node.js', 'Express', 'React', 'GridFS', 'Mongodb'],
    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777047889/PRJ005_sznpjn.png',
        alt: 'Spotify clone player',
      },
    ],
  },

  {
    id: 7,
    title: 'Awwwards Inspiration',
    category: 'design',
    date: '2022',
    link: 'https://github.com/HarshUserethe/RocketAir-Clone',
    image:
      'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777054472/PRJ007_u5ltju.png',

    tagline:
      'Awwwards Inspiration Website is a modern frontend design project inspired by award-winning websites. The project focuses on responsive layouts, smooth animations, and interactive UI experiences to showcase advanced frontend design and creative web development techniques.',
    description: [
      {
        type: 'heading',
        content: 'What is Awwwards Inspiration Website and what it does?',
      },
      {
        type: 'paragraph',
        content:
          'Awwwards Inspiration Website is a modern frontend design project inspired by award-winning websites featured on Awwwards. The project focuses on creating visually appealing layouts, smooth animations, interactive UI elements, and immersive user experiences using modern web technologies.',
      },
      {
        type: 'paragraph',
        content:
          'The primary goal of the project is to explore advanced frontend design concepts, creative animations, responsive layouts, and modern user interface techniques commonly used in high-end portfolio and creative agency websites.',
      },

      {
        type: 'heading',
        content: 'Modern UI and Interactive Design',
      },
      {
        type: 'paragraph',
        content:
          'The project features modern user interface components with smooth transitions, interactive sections, creative layouts, and visually engaging design elements inspired by award-winning web experiences.',
      },

      {
        type: 'heading',
        content: 'Responsive Layout System',
      },
      {
        type: 'paragraph',
        content:
          'The website is fully responsive and optimized for different screen sizes, ensuring a seamless browsing experience across desktop, tablet, and mobile devices.',
      },

      {
        type: 'heading',
        content: 'Animation and Visual Effects',
      },
      {
        type: 'paragraph',
        content:
          'The design incorporates smooth animations, hover effects, scrolling interactions, and modern visual transitions to create an immersive and dynamic user experience.',
      },
    ],
    tags: ['HTML', 'CSS', 'GSAP', 'ScrollTrigger'],
    liveLink: '',
    coffeeLink: 'https://buymeacoffee.com/you',
    screenshots: [
      {
        src: 'https://res.cloudinary.com/da6pzcqcw/image/upload/v1777054472/PRJ007_u5ltju.png',
        alt: 'Awwwards clone hero',
      },
    ],
  },
];

const aboutData = [{ hero_image_url: '', resume_url: '' }];

const contactData = [{ hero_image_url: '' }];

export { homeData, aboutData, contactData };
