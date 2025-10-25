// Define the type for a project
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

// Define your data with the Project[] type
const projects: Project[] = [
  {
    title: "Jollof Token Platform",
    description:
      "A vibrant community-driven platform built for the Jollof Token project. Designed engaging user interfaces with smooth interactions.",
    image: "/pfp.jpg",
    link: "https://jolloftoken.com",
  },
  {
    title: "XT Exchange",
    description:
      "Developed intuitive crypto trading interfaces for users, making trading seamless and efficient.",
    image: "/images/xt-exchange.png",
    link: "https://xt.com",
  },
  {
    title: "Freelance Web Apps",
    description:
      "Built slick, user-friendly web applications for clients on Upwork & Fiverr.",
    image: "/images/freelance-project.png",
    link: "#",
  },
];

export default projects;
