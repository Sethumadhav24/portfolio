import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate Java Backend developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in back-end technologies like Java, Spring Boot, Spring Security, Nodejs, Azure, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including Java, Python, C/C++, Spring Boot, MySQL, and machine learning frameworks. My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy contributing to open-source projects and exploring new advancements in technology.`;
// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2024 - June 2024",
    role: "Flutter Developer Intern",
    company: "Techno Particles",
    description: `I and my team are assisting in the development of a Flutter-based mobile application under the guidance of senior developers, resulting in a 30% increase in user engagement and collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Flutter", "Java", "Dart", "State Managment"],
  },
  {
    year: "2022 - 2023",
    role: "Machine Learning Intern",
    company: "Suvidha Foundation",
    description: `Developed a report and model for Text summarization presented multifaceted challenges and Conducted extensive research, collaborated with team, and engaged in practical experimentation`,
    technologies: ["Python", "NLP", "NLTK"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Secure Bank Application",
    image: project1,
    // link: "https://sece-leaderboard-nitjsr.netlify.app/",
    link: "https://github.com/Sethumadhav24/Banking_application",
    description:
      "A platform developed to provide secure online banking services, built with Spring Boot, Java, MySQL, and Spring Security(authentication and authorization). It offers real-time notifications for sign-ups, transactions, and account activities via email alerts. RESTful APIs enable managing accounts, transactions, and balances. A well-designed database schema for banking-related entities, ensuring data integrity and smooth operations.",
    technologies: ["Java", "Spring Boot", "Spring Security", "MySQL"],
  },
  {
    title: "Study of chances of Neurological Recovery Post Cardiac Arrest",
    image: project2,
    // link: "https://anidatabase.netlify.app/",
    link: "https://github.com/Sethumadhav24/neurological-recovery-deep-learning",
    description:
      "A platform developed to predict neurological recovery post cardiac arrest using a Bi-LSTM model and large dataset analysis. It features a Streamlit-based user interface, enabling seamless interaction with the model. Users can upload data and receive real-time predictions, facilitating a 20% increase in engagement over manual processes. The interface helps medical professionals to make informed decisions and improve patient outcomes.",
    technologies: ["Python", "Bi-LSTM", "Streamlit", "Scikit-learn"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   link: "https://sece-leaderboard-nitjsr.netlify.app/",
  //   code: "https://github.com/pratiksonthaliya/SECE-Leaderboard",
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],
  // },
  {
    title: "Biometric Attendance System using Google sheet Integration",
    image: project3,
    // link: "https://www.npmjs.com/package/my-programming-language",
    link: "https://github.com/Sethumadhav24/Biometric-Attendance",
    description:
      "A platform for automated attendance tracking. Users can effortlessly mark their attendance using biometric authentication, eliminating the need for manual processes.It reduces management time by 40%, enhances security by 75%, and accurately records attendance for 120 individuals with 99.9% data precision, eliminating manual processes.",
    technologies: ["Python", "Arduino", "Firebase"],
  },
  {
    title: "Tic Tac Toe",
    image: project4,
    // link: "https://tic-tac-toe-pratik.vercel.app/",
    link: "https://github.com/Sethumadhav24/tic-tac-toe",
    description:
      "Tic Tac Toe is a fun and interactive game built using React. The game features a responsive board where players can take turns to place their 'X' or 'O' marks.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana, India ",
  phoneNo: "+91 6303062156 ",
  email: "sethumadhav2467@gmail.com"
};
