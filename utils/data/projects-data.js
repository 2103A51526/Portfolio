import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import learn from '/public/image/learn.jpg'
export const projectsData = [
    {
        id: 1,
        name: 'WalkInStyle',
        description: '“This WalkInStyle website project is a comprehensive platform for online shopping, featuring a responsive design and seamless user experience. Developed using the MERN stack, it allows users to browse products, add them to their cart, and complete secure transactions. The admin dashboard empowers administrators to manage products and view sales analytics effectively. With robust authentication, efficient state management using Redux Toolkit, and optimized performance, this project delivers a scalable and secure solution for modern online commerce.”',
        tools: ['ReactJS', 'Tailwind CSS', "Shadcn UI", "Cloudinary", "JavaScript", "MongoDB", "ExpressJS", 'NodeJS', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Chatbot Application',
        description: "I developed a chatbot using Python, leveraging Flask for the backend. The application integrates NLTK for advanced natural language processing (NLP) features, including lemmatization, synonym recognition, and stop-word filtering. The chatbot learns dynamically, updating its JSON-based knowledge base based on user-provided inputs when answers are not available.",
        tools: ['Flask','PyTorch', 'MongoDB','NLTK','HTML5', 'CSS3', 'JavaScript','JSON'],
        role: 'Back-End',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Restaurant Management System',
        description: 'The Restaurant Management System is a comprehensive platform designed to enhance restaurant operations and improve customer experience. It offers features like online table reservations, menu browsing, and real-time order tracking. The system allows customers to conveniently explore menu options, place orders, and make payments securely. Administrators can efficiently manage tables, menus, and orders while accessing sales analytics and reports, making it an ideal solution for streamlining restaurant workflows.',
        tools: ['HTML5', 'CSS3', "Bootstrap", "JavaScript", "PostgreSQL", "ExpressJS", 'NodeJS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 4,
        name: 'Apple Showcase Animated Website',
        description: 'I developed an animated iPhone store website using React + Vite and GSAP, feabturing sleek animations, smooth transitions, and a modern, responsive design. The site offers an interactive shopping experience with engaging product displays, customizable options, and detailed pages for each iPhone model. Utilizing GSAP, I created dynamic scrolling effects and captivating animations, ensuring a visually immersive and performance-optimized user experience across all devices. This project highlights my expertise in React, advanced animations, and crafting intuitive, user-friendly interfaces.',
        tools: ['ReactJS', 'Bootstrap','Vite','TailwindCSS', 'ThreeJS','Gsap', 'ExpressJS', 'JavaScript', 'MongoDB',  'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'One-Step Mobile Solution Application ',
        description: "An all-encompassing Flutter application offering a unified platform for users to execute mobile recharges, procure products, settle bills, review transaction histories, and oversee diverse financial operations. The application is meticulously designed with a contemporary, user-centric interface, incorporating a multitude of features to elevate the user experience. UserID- LG000047 and Pass- 12345678.",
        tools: ['Flutter', 'Dart', 'RestApi', 'Android Studio', "MySQL"],
        code: '',
        demo: '',
        image: learn,
        role: 'Full Stack Developer',
    },
    
];
