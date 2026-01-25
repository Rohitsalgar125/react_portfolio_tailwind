import allmasterspng from '../assets/allmasters.png';
import microfrontendpng from '../assets/micro-frontend.png';
import logisticsplatformpng from '../assets/logistics-platform.png';

export const projects = [
  {
    title: 'AllMasters',
    description:
      'Developed a UI application with user authentication and real-time features such as booking, booking tracking, and milestone-based live shipment tracking.',
    technologies: [
      'React',
      'Bootstrap',
      'Material UI',
      'RESTful APIs',
      'Firebase',
      'Node.js',
    ],
    liveUrl: 'https://www.allmasters.ai',
    img: allmasterspng,
  },
  {
    title: 'Micro Frontend Architecture POC',
    description:
      'Built a proof-of-concept demonstrating Micro Frontend architecture using Vite and Module Federation, enabling independent deployments and scalable frontend development across teams.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Module Federation',
      'Micro Frontends',
    ],
    liveUrl: null,
    img: microfrontendpng,
  },
  {
    title: 'Logistics Management Platform',
    description:
      'Developed scalable React.js dashboards and workflows for logistics and shipment management, focusing on performance optimization, real-time UI updates, and component reusability.',
    technologies: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Firebase',
      'RESTful APIs',
    ],
    liveUrl: null,
    img: logisticsplatformpng,
  },
];
