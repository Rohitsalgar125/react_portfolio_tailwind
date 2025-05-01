import allmasters from "../assets/projects/allmasters.png";
import tictactoe from "../assets/projects/tictactoe.png";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/rohit-salgar-689090180/";

export const GITHUB_URL = "https://github.com/Rohitsalgar125";

export const INSTA_URL = "https://www.instagram.com/rhohits45";

export const HERO_NAME = "Rohit Salgar";

export const HERO_ROLE = "MERN Stack Developer";

export const HERO_CONTENT = `Dynamic MERN Stack Developer specializing in building responsive web applications with React.js, Node.js, Express, and MongoDB. Passionate about crafting intuitive user interfaces with clean, efficient code and seamless full-stack integration. Experienced in RESTful APIs, state management, and responsive design with a strong focus on performance optimization. Collaborative team player with expertise in agile methodologies, problem-solving, and implementing software development best practices. Eager to tackle challenging projects that leverage my skills in front-end development, back-end integration, and modern JavaScript frameworks.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Express, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Sr Frontend Developer",
    company: "AllMasters",
    description: ` Built REST web services by developing a Node.js backend to handle front-end requests, enabling
real-time data integration crucial for logistics workflows.
Developed and consumed multiple RESTful APIs to fetch and update data from internal portals,
supporting seamless communication across logistics systems and services.
Collaborated with cross-functional teams to deliver new features.Implemented robust CRUD operations for managing rates, shipment schedules, and CFS (Container Freight Station) details, ensuring seamless data flow and operational efficiency in the logistics
platform.Handled end-to-end booking flow for logistics operations by developing dynamic and responsive
forms with multiple input fields using React-Hook-Form, ensuring data accuracy and streamlined
user interaction.Implemented real-time push notifications using Firebase Cloud Messaging (FCM) to improve
user engagement and ensure timely updates across the logistics platform`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React js",
      "Redux Js",
      "Node js",
      "MongoDB",
    ],
  },
  {
    year: "Jul 2022 - Jan 2024",
    role: "Web Developer",
    company: "Dokonaly",
    description: `Designed and developed responsive front-end interfaces using HTML5, CSS3, Bootstrap, and
React Js, tailored for LCL logistics shipment tracking systems . Created and maintained user-friendly web forms and validation workflows for booking and tracking
LCL shipments, improving the customer interaction with the logistics platform.Used Bootstrap and media queries to create a responsive website.
Implemented robust CRUD operations for managing rates, shipment schedules, and CFS (Container Freight Station) details, ensuring seamless data flow and operational efficiency in the logistic`,
    technologies: ["HTML", "CSS", "Javascript", "React js", "Redux Js"],
  },
  {
    year: "Dec 2021 - Jul 2022",
    role: "Front End Developer Intern",
    company: "Newton School",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS", "Javascript", "React js", ""],
  },
];

export const PROJECTS = [
  {
    title: "AllMasters",
    image: allmasters,
    description:
      ` Developed a UI application with user authentication and real-time features like booking , my
booking tracking , milestone for live tracking .Implemented responsive design using bootstrap , media queries.
Implemented key modules such as rate management, shipment scheduling, and CFS operations
using modern front-end technologies and RESTful APIs for seamless user experience and operational
efficiency.
`,
    technologies: ["HTML", "CSS", "React", "Redux Js", "Node.js", "MongoDB"],
    liveLink: 'https://www.allmasters.ai/'
  },
  {
    title: "Tic Tac Toe",
    image: tictactoe,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript"],
    liveLink: 'https://rohitsalgar-web-tic-tac-toe.netlify.app/'
  },
];

export const CONTACT = {
  address: "45 , Fifth Floor Hinjewadi , Pune , 411057  ",
  phoneNo: "+91 8779404201",
  email: "rhohitsalgar@gmail.com",
};
