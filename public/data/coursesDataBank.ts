import course1Img from "../../public/images/projects/1-mna-computer-manufacture.png";
import course3Img from "../../public/images/projects/3-mna-events-ltd.png";
import course4Img from "../../public/images/projects/4-wind-travels.png";
import course5Img from "../../public/images/projects/5-mna-munna-photographer.png";

export const coursesData = [
  {
    title: "Full-Stack Web Development",
    id: "course-01-full-stack-web-development",
    imageLink: course1Img,
    desc: "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more to build scalable web applications.",
    duration: "6 Months",
    price: "$299",
    gradient: "from-blue-500 to-cyan-400",
    curriculum: [
      "Introduction to Web Development",
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "React.js & Next.js",
      "Backend with Node.js & Express",
      "Databases with MongoDB",
      "Deployment & Optimization",
    ],
    instructor: {
      name: "John Doe",
      title: "Senior Web Developer",
      bio: "John has 10+ years of experience building web apps for Fortune 500 companies.",
      image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    },
  },
  {
    title: "Frontend Development",
    id: "course-02-frontend-development",
    imageLink: course3Img,
    desc: "Build responsive websites using HTML, CSS, and JavaScript.",
    duration: "4 Months",
    price: "$249",
    gradient: "from-purple-500 to-pink-500",
    curriculum: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "Responsive Design with Flexbox & Grid",
      "Advanced CSS Techniques",
      "JavaScript Frameworks Overview (React, Vue, Angular)",
    ],
    instructor: {
      name: "Jane Smith",
      title: "Frontend Engineer",
      bio: "Jane specializes in creating beautiful and functional user interfaces.",
      image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    },
  },
  {
    title: "Backend Development",
    id: "course-03-backend-development",
    imageLink: course4Img,
    desc: "Master Node.js, Express, and MongoDB to build powerful backend applications.",
    duration: "3 Months",
    price: "$199",
    gradient: "from-orange-400 to-yellow-400",
    curriculum: [
      "Node.js Basics",
      "Express.js Framework",
      "RESTful APIs",
      "Database Integration with MongoDB",
      "Authentication & Authorization",
    ],
    instructor: {
      name: "Mike Johnson",
      title: "Backend Developer",
      bio: "Mike has a passion for building robust and scalable server-side applications.",
      image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    },
  },
  {
    title: "Advance AI Course",
    id: "course-04-advance-ai-course",
    imageLink: course5Img,
    desc: "Dive deep into AI with advanced machine learning techniques, neural networks, and data science.",
    duration: "6 Months",
    price: "$149",
    gradient: "from-green-400 to-teal-400",
    curriculum: [
      "Introduction to AI & Machine Learning",
      "Data Preprocessing & Visualization",
      "Supervised Learning Algorithms",
      "Neural Networks & Deep Learning",
      "Natural Language Processing",
      "AI Ethics & Future Trends",
    ],
    instructor: {
      name: "Sarah Lee",
      title: "AI Researcher",
      bio: "Sarah is a leading expert in AI with numerous publications in top journals.",
      image: "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    },
  },
];
