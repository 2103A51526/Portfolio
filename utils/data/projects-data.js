import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
export const projectsData = [
    {
        id: 1,
        name: 'University Networking Architecture',
        description: '“This project showcases a robust, scalable, and secure university network infrastructure designed and simulated using Cisco Packet Tracer. The architecture mimics a real-world academic environment, structured into a Main Campus and a Branch Campus, with multiple departments logically isolated using VLANs and connected via Layer 3 (Inter-VLAN) Routing. This hierarchical design ensures optimal performance, centralized management, and enhanced security. The implementation includes Dynamic Host Configuration Protocol (DHCP) for automated IP management, Access Control Lists (ACLs) for traffic filtering, and wireless integration to accommodate mobile and BYOD devices. RIPv2 routing enables seamless communication between campuses, offering a reliable, simulation-friendly protocol for route propagation.”',
        tools: ['Cisco Packet Tracer', 'VLANs', 'Inter-VLAN Routing', 'DHCP', 'ACLs','RIPv2', 'Wireless Networking'],
        role: 'Network Designer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Chat Room Application',
        description: "This project is a command-line based real-time chat application developed in Python using socket programming and multithreading. As the Python Developer, I built both the client and server modules to facilitate communication over TCP/IP. The server handles multiple clients simultaneously using threads, receives usernames, and broadcasts messages to all connected users. The client, running directly from the command prompt (CMD), connects to the server, allows users to enter a name, and supports real-time message exchange via dedicated threads for sending and receiving. The project demonstrates core concepts of networking, concurrency, and terminal-based interaction without the use of a graphical user interface.",
        tools: ['Python', 'Socket', 'Threading', 'TCP/IP', 'CMD(Terminal)'],
        role: 'Python Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Restaurant Management System',
        description: 'The Restaurant Management System is a comprehensive platform designed to enhance restaurant operations and improve customer experience. It offers features like online table reservations, menu browsing, and real-time order tracking. The system allows customers to conveniently explore menu options, place orders, and make payments securely. Administrators can efficiently manage tables, menus, and orders while accessing sales analytics and reports, making it an ideal solution for streamlining restaurant workflows.',
        tools: ['HTML5', 'CSS3', "Bootstrap", "JavaScript", "PostgreSQL", "ExpressJS", 'NodeJS'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 4,
        name: 'File Encryption Decription Tool',
        description: 'This project is a web-based File Encryption & Decryption Tool built using HTML, CSS, and JavaScript. It allows users to upload text files and perform encryption or decryption using multiple classical algorithms such as XOR, Caesar Cipher, and Vigenère Cipher. Users can specify a key and output file name, and the processing is done entirely in the browser without any backend, providing instant downloadable encrypted or decrypted files with a clean and intuitive UI.',
        tools: ['HTML5', 'CSS', 'JavaScript', 'XOR Cipher', 'Ceaser Cipther', 'Vigenere Cipher'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    
];
