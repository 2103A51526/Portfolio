import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
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
        name: 'Product Store',
        description: 'A user-centric web application designed for listing and showcasing products for sale. It allows users to upload product details, including images, prices, and descriptions, enabling a streamlined buying and selling experience. The platform supports real-time updates, intuitive navigation, and visually appealing interfaces, ensuring convenience for users to explore and purchase items efficiently.',
        tools: ['ReactJS', 'Bootstrap','Vite','TailwindCSS','Gsap', 'ExpressJS', 'JavaScript', 'MongoDB',  'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    
];
