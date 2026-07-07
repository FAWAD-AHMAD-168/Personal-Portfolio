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
          "Implemented a fully responsive layout for mobile, tablet, and desktop.",
      },
      {
        icon: "/features/learnify/grid.svg",
        title: "CSS Grid",
        description: "Implemented CSS Grid for the features section layout",
      },
      {
        icon: "/features/learnify/flex.svg",
        title: "Flexbox",
        description: "Used Flexbox for alignment and component positioning",
      },
      {
        icon: "/features/learnify/footer.svg",
        title: "Structured Footer",
        description: "Implemented a structured and responsive footer",
      },
      {
        icon: "/features/learnify/typography.svg",
        title: "Consistent Styling",
        description:
          "Maintained consistent spacing, typography, and color styling",
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
        description:
          "Utilized Tailwind's responsive grid system to create cross-device layouts for movie cards.",
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
        description:
          "Implemented Tailwind hover overlays showing movie ratings, genres, and a details button.",
      },
    ],
    showcaseImages: [
      {
        image: "/project_details/yts/home1.jpeg",
        title: "Hero Banner and Popular Downloads",
        description:
          "The main landing view showcasing the centralized headline banner text, search bar navigation, and the beginning of the Popular Downloads row.",
      },
      {
        image: "/project_details/yts/popular1.jpeg",
        title: "Popular Downloads Section",
        description:
          "Displays prominent titles like Kesari Chapter 2, Sikandar, Bhool Chuk Maaf, and Azaad with hover-ready image borders.",
      },
      {
        image: "/project_details/yts/card_hover.png",
        title: "Interactive Movie Card Hover State",
        description:
          "Demonstrates the custom overlay triggered upon hovering over a movie card, displaying the star rating, movie genres, and an interactive details button.",
      },
      {
        image: "/project_details/yts/warning.jpeg",
        title: "VPN Warning Notice Component",
        description:
          "A warning container alerting users about download security, styled with a distinct green neon border and custom highlight text badges.",
      },
      {
        image: "/project_details/yts/bollywood.jpeg",
        title: "Some Bollywood Hits Torrents Section",
        description:
          "A categorized movie grid featuring popular Indian cinema releases such as Chhichhore, Don 2, and Drishyam 2 equipped with resolution corner tags.",
      },
      {
        image: "/project_details/yts/marvel.jpeg",
        title: "Top Marvel Blockbusters Section",
        description:
          "A themed compilation grid styled specifically for cinematic franchises, featuring clean alignment for movie titles and launch years.",
      },
      {
        image: "/project_details/yts/upcoming.jpeg",
        title: "Upcoming YIFY Movies Section",
        description:
          "A showcase row displaying highly anticipated upcoming releases like Final Destination: Bloodlines and Deep Cover.",
      },
      {
        image: "/project_details/yts/footer.jpeg",
        title: "Structured Footer Layout",
        description:
          "A complete multi-link informational footer replicating the official copyright statements, site links, and user agreement disclaimers.",
      },
    ],
  },

  //  MERN-AUTHENTICATION-SYSYTEM

  {
    id: 3, // Match this with your routing array index appropriately
    title: "MERN Authentication System",
    slug: "mern-auth-system",
    description:
      "A production-ready, full-stack authentication ecosystem built with the MERN stack. This system implements end-to-end user security, handling registration validation, token lifecycle orchestration, and self-service account recovery. The backend features rate-limiting defenses, layered route middleware, and secure cookie storage, while the frontend delivers a lightweight, predictive state management layer integrated into a responsive interface.",
    descriptionForSmallerScreens:
      "A production-ready full-stack authentication system built with the MERN stack. Implements email OTP validation, secure HTTP-only JWT cookies, rate-limiting, and profile state management with Redux Toolkit.",
    projImg: "/projects/mern_auth_12.svg",
    githubRepoLink: "https://github.com/FAWAD-AHMAD-168/MERN-AUTH",
    // livedemolink: "https://mern-auth.netlify.app/",
    duration: "Aug 2025 - Sep 2025",
    techStack: [
      { icon: "/skills/frontend/react.svg", name: "React" },
      { icon: "/skills/frontend/tailwindcss.svg", name: "Tailwind CSS" },
      { icon: "/project_details/mern_auth/redux.svg", name: "Redux Toolkit" },
      { icon: "/skills/backend/nodejs.svg", name: "Node.js" },
      { icon: "/skills/backend/expressjs.svg", name: "Express.js" },
      { icon: "/skills/backend/mongodb.svg", name: "MongoDB" },
    ],
    features: [
      {
        icon: "/features/mern_auth/email.svg",
        title: "  Email OTP Verification",
        description:
          "Verifies new accounts via secure email OTPs powered by Resend.",
      },
      {
        icon: "/features/mern_auth/cookie.svg",
        title: "HTTP-Only Token Storage",
        description:
          "Stores JWTs in HTTP-only cookies to prevent XSS token theft.",
      },
      {
        icon: "/features/mern_auth/shield.svg",
        title: "Layered Route Protection",
        description:
          "Secures private routes using client and server-side authorization checks.",
      },
      {
        icon: "/features/mern_auth/key.svg",
        title: "Automated Password Recovery",
        description:
          "Provides secure password reset with temporary recovery tokens.",
      },
      {
        icon: "/features/mern_auth/rate_limit.svg",
        title: "API Rate-Limiting",
        description:
          "Restricts excessive requests to defend against brute-force attacks.",
      },
      {
        icon: "/features/mern_auth/lock.svg",
        title: "Secure Password Management",
        description:
          "Enables users to securely change their account passwords.",
      },

      {
        icon: "/features/mern_auth/rtk.svg",
        title: "RTK Query Data Fetching",
        description:
          "Fetches and caches server data efficiently using RTK Query.",
      },
    ],
    showcaseImages: [
      {
        image: "/project_details/mern_auth/homepage.jpeg",
        title: "Minimal Landing Homepage",
        description:
          "A clean, light-themed home overview welcoming visitors with action pathways to create accounts or sign in securely.",
      },
      {
        image: "/project_details/mern_auth/register.jpeg",
        title: "Account Registration Interface",
        description:
          "Structured signup wrapper requesting usernames, emails, and passwords safely coupled with front-facing status hooks.",
      },
      {
        image: "/project_details/mern_auth/verify-otp.jpeg",
        title: "Secure Verification Checkpoint",
        description:
          "A minimalistic entry card providing single-use token submission fields alongside automated fallback code request tools.",
      },
      {
        image: "/project_details/mern_auth/login.jpeg",
        title: "Credential Authentication Page",
        description:
          "User login gate containing access controls, error-safe fields, and quick-access routes to reset profiles.",
      },
      {
        image: "/project_details/mern_auth/profile.jpeg",
        title: "Authenticated Profile View",
        description:
          "A restricted profile environment showing individual details alongside successful connection notifications.",
      },
      {
        image: "/project_details/mern_auth/forgot-password.jpeg",
        title: "Account Recovery Form",
        description:
          "Recovery screen enabling registered users to safely trigger reset validation pipelines via verified emails.",
      },
      {
        image: "/project_details/mern_auth/change_password.jpeg",
        title: "Active Security Management",
        description:
          "Inside access screen built for active profile users looking to update passwords directly from within the session.",
      },
      {
        image: "/project_details/mern_auth/not_found.jpeg",
        title: "Custom 404 Route Handler",
        description:
          "A clean, branded fallback screen handling navigation exceptions gracefully with simple redirect actions.",
      },
    ],
  },
];

export default ProjectDetailsData;
