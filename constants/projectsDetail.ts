export interface ProjectDetails {
  id: number;
  title: string;
  slug: string;
  description: string;
  descriptionForSmallerScreens: string;
  projImg: string;
  githubRepoLink: string;
  livedemolink?: string;
  duration: string;
  techStack: { icon: string; name: string; width?: number; height?: number }[];
  features: { icon: string; title: string; description: string }[];
  showcaseImages: { image: string; title: string; description: string }[];
}

const ProjectDetailsData: ProjectDetails[] = [
  // Learnify Project
  {
    id: 1,
    title: "Learnify",
    slug: "learnify",
    description:
      "This project marks the beginning of my web development journey—a fully responsive landing page built with HTML and CSS. It demonstrates my foundational skills in creating clean, structured layouts, implementing CSS Grid and Flexbox, and designing mobile-first, responsive interfaces. The page features a hero section with animations, a feature grid, testimonials, and a footer, showcasing attention to detail and a strong understanding of frontend design principles.",
    descriptionForSmallerScreens:
      "This project marks the start of my web development journey—a responsive landing page built with HTML and CSS. It showcases clean layouts, CSS Grid, Flexbox, and mobile-first design. The page includes a hero section, feature grid, testimonials, and footer, reflecting strong frontend fundamentals. ",
    projImg: "/projects/learnify.svg",
    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/Learnify",
    techStack: [
      { icon: "/skills/frontend/html.svg", name: "HTML" },
      { icon: "/skills/frontend/css.svg", name: "CSS" },
    ],
    duration: "Feb 2025 - Mar 2025",

features: [
  {
    icon: "/features/learnify/respo.svg",
    title: "Responsive Design",
    description:
      "Implemented a fully responsive layout that adapts smoothly across mobile, tablet, and desktop screen sizes.",
  },
  {
    icon: "/features/learnify/grid.svg",
    title: "CSS Grid Layout",
    description:
      "Utilized CSS Grid to create a structured features section with flexible columns, consistent spacing, and responsive behavior.",
  },
  {
    icon: "/features/learnify/flex.svg",
    title: "Flexbox Layout",
    description:
      "Used Flexbox for efficient alignment, spacing, and positioning of components across different sections of the interface.",
  },
  {
    icon: "/features/learnify/footer.svg",
    title: "Structured Footer",
    description:
      "Designed a structured and responsive footer with organized content sections and consistent alignment across screen sizes.",
  },
  {
    icon: "/features/learnify/typography.svg",
    title: "Consistent Styling",
    description:
      "Maintained consistent spacing, typography, colors, and visual styling to create a clean and cohesive user interface.",
  },
],

    showcaseImages: [
      {
        image: "/project_details/learnify/hero1.jpeg",
        title: "Header and Hero Section",
        description:
          "The header and hero section provide the first impression of the platform, featuring intuitive navigation, a compelling headline, and clear call-to-action buttons that introduce the platform's purpose and encourage user engagement.",
      },
      {
        image: "/project_details/learnify/grid.jpeg",
        title: "Feature Grid",
        description:
          "This section presents the key aspects of the platform in a structured grid layout, allowing users to quickly understand the main features, benefits, and areas of focus offered by the website.",
      },
      {
        image: "/project_details/learnify/testimonials.jpeg",
        title: "Testimonials and Newsletter",
        description:
          "The testimonial and newsletter section combines social proof with user engagement by showcasing feedback from users and providing an email subscription form to receive updates and announcements.",
      },
      {
        image: "/project_details/learnify/footer1.jpeg",
        title: "Structured Footer",
        description:
          "The footer serves as the final navigation area of the website, providing quick access to important links, contact information, and additional resources while maintaining a clean and organized layout.",
      },
    ],
    livedemolink: "https://learnify-learning-app.netlify.app/",
  },

  // YTS-YIFY Movies Clone Website
  {
    id: 2,
    title: "YTS YIFY Movies Clone",
    slug: "yts-yify-movies-clone",
    description:
      "A fully responsive pixel-perfect clone of the YTS YIFY movies torrent website built to explore the utility-first capabilities of Tailwind CSS. The project features a dark-themed user interface containing structured sections for featured popular downloads, latest releases, Bollywood hits, Marvel Blockbusters, and upcoming YIFY titles. It focuses on clean layout structure, custom utility styling, and building cross-device responsive grids without leaving the HTML.",
    descriptionForSmallerScreens:
      "A responsive clone of the YTS YIFY torrent site built with HTML and Tailwind CSS to explore modern utility-first layouts. Includes grids for popular downloads, Bollywood hits, Marvel blockbusters, and upcoming movies.",
    projImg: "/projects/yts11.svg",
    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/YTS-YIFY-Movies-Clone",
    livedemolink: "https://yts-yifymovies.netlify.app/",
    duration: " June 2025", //
    techStack: [
      { icon: "/skills/frontend/html.svg", name: "HTML" },
      { icon: "/skills/frontend/tailwindcss.svg", name: "Tailwind CSS" },
    ],
    features: [
      {
        icon: "/features/yts/grid.svg",
        title: "Tailwind Grid & Flexbox",
        description: "Utilized Tailwind's responsive grid system to create cross-device layouts for movie cards.",
      },
      {
        icon: "/features/yts/dark.svg",
        title: "Dark Themed UI",
        description:
          "Replicated the exact signature dark color scheme and typography matching the original YTS website.",
      },
      {
        icon: "/features/yts/badge.svg",
        title: "Dynamic Quality Badges",
        description:
          "Implemented absolute positioning for custom quality tags like 720p and 1080p over the movie thumbnail covers.",
      },
      {
        icon: "/features/yts/alert.svg",
        title: "Custom Banner Alerts",
        description:
          "Built a realistic, stylized VPN warning notification block utilizing Tailwind's border and spacing utilities.",
      },
      {
        icon: "/features/yts/hover.svg",
        title: "Interactive Hover Overlays",
        description: "Implemented Tailwind hover overlays showing movie ratings, genres, and a details button.",
      },
    ],
    showcaseImages: [
      {
        image: "/project_details/yts/home12.svg",
        title: "Hero Banner and Popular Downloads",
        description:
          "The main landing view showcasing the centralized headline banner text, search bar navigation, and the beginning of the Popular Downloads row.",
      },
      {
        image: "/project_details/yts/popular2.svg",
        title: "Popular Downloads Section",
        description:
          "Displays prominent titles like Kesari Chapter 2, Sikandar, Bhool Chuk Maaf, and Azaad with hover-ready image borders.",
      },
      {
        image: "/project_details/yts/card_hover1.svg",
        title: "Interactive Movie Card Hover State",
        description:
          "Demonstrates the custom overlay triggered upon hovering over a movie card, displaying the star rating, movie genres, and an interactive details button.",
      },
      {
        image: "/project_details/yts/warning1.svg",
        title: "VPN Warning Notice Component",
        description:
          "A warning container alerting users about download security, styled with a distinct green neon border and custom highlight text badges.",
      },
      {
        image: "/project_details/yts/bollywood1.svg",
        title: "Some Bollywood Hits Torrents Section",
        description:
          "A categorized movie grid featuring popular Indian cinema releases such as Chhichhore, Don 2, and Drishyam 2 equipped with resolution corner tags.",
      },
      {
        image: "/project_details/yts/marvel1.svg",
        title: "Top Marvel Blockbusters Section",
        description:
          "A themed compilation grid styled specifically for cinematic franchises, featuring clean alignment for movie titles and launch years.",
      },
      {
        image: "/project_details/yts/upcoming1.svg",
        title: "Upcoming YIFY Movies Section",
        description:
          "A showcase row displaying highly anticipated upcoming releases like Final Destination: Bloodlines and Deep Cover.",
      },
      {
        image: "/project_details/yts/footer1.svg",
        title: "Structured Footer Layout",
        description:
          "A complete multi-link informational footer replicating the official copyright statements, site links, and user agreement disclaimers.",
      },
    ],
  },

  // MERN Authentication System 

  {
    id: 3,

    title: "MERN Authentication System",
    slug: "mern-auth-system",

    description:
      "A production-ready, full-stack authentication system built with the MERN stack for secure user registration, authentication, and account recovery. It implements email OTP verification, JWT authentication with HTTP-only cookies, password management, protected routes, rate limiting, and role-based authorization. The backend follows a modular architecture, while the React frontend uses Redux Toolkit and RTK Query for centralized state management and efficient API data fetching.",

    descriptionForSmallerScreens:
      "A production-ready full-stack authentication system built with the MERN stack. It provides secure registration, email OTP verification, JWT authentication with HTTP-only cookies, password recovery, protected routes, rate limiting, and centralized profile state management with Redux Toolkit and RTK Query.",

    projImg: "/project_details/mern_auth/homepage1.svg",

    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/MERN-AUTH",

    duration: "Aug 2025 - Sep 2025",

    techStack: [
      {
        icon: "/skills/frontend/react.svg",
        name: "React",
      },
      {
        icon: "/skills/frontend/tailwindcss.svg",
        name: "Tailwind CSS",
      },
      {
        icon: "/project_details/mern_auth/redux.svg",
        name: "Redux Toolkit",
      },
      {
        icon: "/skills/backend/nodejs.svg",
        name: "Node.js",
      },
      {
        icon: "/skills/backend/expressjs.svg",
        name: "Express.js",
      },
      {
        icon: "/skills/backend/mongodb.svg",
        name: "MongoDB",
      },
    ],

    features: [
      {
        icon: "/features/mern_auth/email.svg",
        title: "Email OTP Verification",
        description:
          "Implemented email-based OTP verification for newly registered accounts using Resend, ensuring users can only activate accounts associated with verified email addresses.",
      },

      {
        icon: "/features/mern_auth/cookie.svg",
        title: "HTTP-Only JWT Authentication",
        description:
          "Implemented JWT authentication with tokens stored in HTTP-only cookies, reducing client-side exposure and providing secure authenticated sessions.",
      },

      {
        icon: "/features/mern_auth/shield.svg",
        title: "Protected Route Authorization",
        description:
          "Implemented layered route protection across the frontend and backend to restrict access to authenticated resources and protected API endpoints.",
      },

      {
        icon: "/features/mern_auth/key.svg",
        title: "Password Recovery",
        description:
          "Built a secure password recovery workflow allowing users to reset their passwords through verified email addresses and temporary recovery tokens.",
      },

      {
        icon: "/features/mern_auth/rate_limit.svg",
        title: "API Rate Limiting",
        description:
          "Integrated rate limiting to restrict excessive API requests and provide protection against brute-force attempts and repeated unauthorized requests.",
      },

      {
        icon: "/features/mern_auth/lock.svg",
        title: "Password Management",
        description:
          "Implemented secure password management functionality allowing authenticated users to change their passwords with appropriate validation and authentication checks.",
      },

      {
        icon: "/features/mern_auth/rtk.svg",
        title: "RTK Query Data Management",
        description:
          "Integrated Redux Toolkit and RTK Query for centralized state management, efficient API communication, request caching, and frontend-backend synchronization.",
      },
    ],

    showcaseImages: [
      {
        image: "/project_details/mern_auth/homepage1.svg",
        title: "Minimal Landing Homepage",
        description:
          "The landing homepage provides a clean entry point into the authentication system, presenting users with clear pathways to create an account or sign in while maintaining a minimal and responsive interface.",
      },

      {
        image: "/project_details/mern_auth/register1.svg",
        title: "Account Registration Interface",
        description:
          "The registration interface allows new users to create accounts by providing essential credentials such as username, email, and password, with frontend validation and backend authentication workflows handling the submitted information securely.",
      },

      {
        image: "/project_details/mern_auth/verify-otp1.svg",
        title: "Email OTP Verification",
        description:
          "The verification interface provides a dedicated checkpoint for confirming newly registered accounts through email OTPs, connecting the frontend verification flow with the backend email delivery and validation process.",
      },

      {
        image: "/project_details/mern_auth/login1.svg",
        title: "User Authentication Interface",
        description:
          "The login page provides the primary authentication entry point, allowing registered users to securely submit their credentials and establish an authenticated session while also providing access to account recovery functionality.",
      },

      {
        image: "/project_details/mern_auth/profile1.svg",
        title: "Authenticated Profile Dashboard",
        description:
          "The protected profile interface displays authenticated user information after successful login and demonstrates the application's private-route protection and centralized authentication state management.",
      },

      {
        image: "/project_details/mern_auth/forgot-password1.svg",
        title: "Password Recovery Interface",
        description:
          "The password recovery screen allows registered users to initiate the account recovery process through their verified email address, connecting the frontend form with the backend recovery and temporary-token workflow.",
      },

      {
        image: "/project_details/mern_auth/change_password1.svg",
        title: "Password Management Interface",
        description:
          "The password management interface provides authenticated users with a dedicated workflow for securely updating their account password while remaining inside their active session.",
      },

      {
        image: "/project_details/mern_auth/404.svg",
        title: "Custom 404 Error Page",
        description:
          "The custom 404 page provides a branded fallback experience for invalid or unavailable routes, helping users recover from navigation errors through a clean interface and straightforward redirection options.",
      },
    ],
  },

  // EveryWear E-Commerce Backend Project

  {
    id: 4,

    title: "EveryWear - E-Commerce Backend",

    slug: "everywear",

    description:
      "EveryWear is a production-oriented e-commerce backend built with Node.js, Express.js, MongoDB, and Mongoose. It provides a complete REST API for authentication, product and catalog management, shopping carts, order processing, reviews, image management, transactional emails, and customer/admin workflows. The project focuses on secure API design, modular backend architecture, database modeling, validation, and real-world e-commerce workflows.",

    descriptionForSmallerScreens:
      "EveryWear is a complete e-commerce backend built with Node.js, Express.js, MongoDB, and Mongoose. It includes secure authentication, product and catalog management, shopping carts, orders, reviews, image uploads, transactional emails, and admin workflows.",

    projImg: "/projects/everywear.png",

    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/Everywear",

    techStack: [
      {
        icon: "/skills/backend/nodejs.svg",
        name: "NodeJS",
      },

      {
        icon: "/skills/backend/expressjs.svg",
        name: "ExpressJS",
      },

      {
        icon: "/skills/backend/mongodb.svg",
        name: "MongoDB",
      },

      {
        icon: "/skills/backend/jwt.svg",
        name: "JWT",
      },

      {
        icon: "/skills/backend/cloudinary.svg",
        name: "Cloudinary",
      },

      {
        icon: "/skills/backend/resend-dark.svg",
        name: "Resend",
      },
    ],

    duration: "Mar 2026 - Aug 2026",

    features: [
      {
        icon: "/features/everywear/account-lock.svg",
        title: "Authentication & Authorization",
        description:
          "Implemented OTP-based email verification, JWT authentication, password reset functionality, and role-based access control for users and administrators.",
      },

      {
        icon: "/features/everywear/products.svg",
        title: "Product Management",
        description:
          "Implemented product, collection, and category management with admin-only operations and support for multiple product images.",
      },

      {
        icon: "/features/everywear/cart.svg",
        title: "Shopping Cart",
        description:
          "Built authenticated cart functionality for adding products, updating quantities, removing items, and clearing the cart.",
      },

      {
        icon: "/features/everywear/order.svg",
        title: "Order Management",
        description:
          "Implemented order creation, cancellation, status management, payment and billing details, shipping information, filtering, sorting, and order statistics.",
      },

      {
        icon: "/features/everywear/reviews.svg",
        title: "Reviews & Ratings",
        description:
          "Implemented product reviews with ratings, review images, update and deletion functionality, and administrative review management.",
      },

      {
        icon: "/features/everywear/images.svg",
        title: "Image Management",
        description:
          "Integrated Multer for handling file uploads and Cloudinary for managing profile, product, and review images.",
      },

      {
        icon: "/features/everywear/email.svg",
        title: "Transactional Emails",
        description:
          "Integrated Resend for transactional email delivery with separate authentication and order email templates.",
      },

      {
        icon: "/features/everywear/shield-lock.svg",
        title: "Security & Validation",
        description:
          "Implemented request validation, password hashing, rate limiting, Helmet, CORS, MongoDB sanitization, and protected administrative routes.",
      },

      {
        icon: "/features/everywear/module.svg",
        title: "Modular Architecture",
        description:
          "Structured the backend into controllers, routes, middleware, validators, services, utilities, models, and configuration modules for maintainability.",
      },

      {
        icon: "/features/everywear/database.svg",
        title: "Database Architecture",
        description:
          "Designed Mongoose models and relationships for users, products, collections, categories, carts, orders, and reviews with indexes for frequently queried fields.",
      },
    ],

    showcaseImages: [
      {
        image: "/project_details/everywear/project-overview.png",
        title: "Project Overview",
        description:
          "This overview diagram presents the overall structure of the EveryWear backend, highlighting its core modules, project flow, and technology stack. It provides a high-level view of how the different components work together to support the e-commerce backend.",
      },
      {
        image: "/project_details/everywear/er.png",
        title: "Entity Relationship Diagram",
        description:
          "The ER diagram illustrates the relationships between the main entities in the EveryWear backend, including Users, Products, Collections, Categories, Carts, Orders, and Reviews. It shows how these entities are connected and how data flows through the system.",
      },
    ],
  },
];

export default ProjectDetailsData;
