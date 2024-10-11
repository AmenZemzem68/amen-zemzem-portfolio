import restauApp from "../assets/restauapp.png";
import eramtecno from "../assets/eramtecno.jpg";
import royal from "../assets/royal.png";
const mProjects = [
  {
    name: "Restaurant App",
    description:
      "A cross-platform app for booking tables and placing orders, providing a convenient and efficient solution for effectively managing restaurant operations.",
    tags: [
      {
        name: "ionic",
        color: "#AC2B61",
      },
      {
        name: "sql",
        color: "#1D9275",
      },
      {
        name: ".net",
        color: "#43A7EC",
      },
    ],
    image: restauApp,
    source_code_link: "https://github.com/AmenZemzem68/zemzem-amen-l3mdw-2024",
  },
  {
    name: "Eram Tecno",
    description:
      "A WordPress-based website offers a wide range of home appliances for easy browsing and purchase. The admin dashboard manages inventory and tracks orders",
    tags: [
      {
        name: "wordpress",
        color: "#AC2B61",
      },
      {
        name: "e-commerce",
        color: "#1D9275",
      },
      {
        name: "porto",
        color: "#43A7EC",
      },
    ],
    image: eramtecno,
    source_code_link: "https://eramtecno.com/",
  },
  {
    name: "Royal Flame",
    description:
      "A restaurant website that features an elegant design for browsing menus & booking tables. It incorporates 3D models to enhance the user experience.",
    tags: [
      {
        name: "react",
        color: "#AC2B61",
      },
      {
        name: "three.js",
        color: "#1D9275",
      },
      {
        name: "laravel",
        color: "#43A7EC",
      },
    ],
    image: royal,
    source_code_link: "https://royal-flame.vercel.app/",
  },
];
const Data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2021 - 2024",
    title: "Bachelor's Degree in Computer Technology.",
    desc: "I specialized in multimedia and web development, focusing on modern web technologies.",
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2017 - 2021",
    title: "High School Diploma.",
    desc: "I studied technical sciences, gaining a strong foundation in computer science.",
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "Feb 2024 - Mai 2024",
    title: "Intern - All Tech Company",
    desc: "Design and development of an order-taking application for restaurants using Ionic and .NET.",
  },
  {
    id: 5,
    category: "experience",
    icon: "icon-briefcase",
    year: "Jan 2024 - Feb 2024",
    title: "Intern - Khomsa Media",
    desc: "Creation and management of an e-commerce website using WordPress.",
  },
  {
    id: 6,
    category: "experience",
    icon: "icon-briefcase",
    year: "Jan 2023 - Feb 2023",
    title: "Intern - Poulina Group Holding",
    desc: "Development of a web application for managing employee training within the company.",
  },
  {
    id: 7,
    category: "experience",
    icon: "icon-briefcase",
    year: "Jan 2023 - Feb 2023",
    title: "Intern - Poulina Group Holding",
    desc: "Configuration of access points and switches\nParticipation in server configuration under supervision.",
  },
];

export { mProjects, Data };
