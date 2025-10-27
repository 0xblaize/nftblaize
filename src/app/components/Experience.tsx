import React from "react";

interface SkillItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  color: string;
  link: string;
}

interface SkillCardProps extends SkillItem {}

const ParagonIcon: React.FC = () => (
  <div
    className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl shadow-xl transform rotate-[-8deg] scale-90"
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)",
      background: "linear-gradient(135deg, #38126D, #251043)",
    }}
  >
    <div className="absolute text-[#fff] text-4xl">🛠️</div>
  </div>
);

const ExchangeIcon: React.FC = () => (
  <div
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center shadow-lg"
    style={{
      background: "linear-gradient(135deg, #130428, #261045)",
    }}
  >
    <svg
      className="w-10 h-10 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16 6l-4 4-4-4-4 4-2-2 6-6 4 4 4-4 6 6zM20 18H4v2h16v-2z" />
    </svg>
  </div>
);

const PhoenixIcon: React.FC = () => (
  <div
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg"
    style={{
      background: "linear-gradient(135deg, #251043, #38126D)",
    }}
  >
    <svg
      className="w-10 h-10 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 8h-2c0-2.76-2.24-5-5-5s-5 2.24-5 5H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 13H5v-7h14v7z" />
    </svg>
  </div>
);

const MobileIcon: React.FC = () => (
  <div
    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg"
    style={{
      background: "linear-gradient(135deg, #190634, #38126D)",
    }}
  >
    <svg
      className="w-10 h-10 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-3.5 19h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm4.5-3H6V6h12v11z" />
    </svg>
  </div>
);

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  actionText,
  color,
  link,
}) => {
  return (
    <div
      className={`
        p-4 md:p-5 rounded-2xl shadow-[0_4px_30px_rgba(150,0,255,0.3)] 
        transition duration-300 transform hover:scale-[1.02] 
        cursor-pointer h-full
        ${color}
        border border-white/10 hover:border-[#ff00ff]
      `}
    >
      <div className="flex flex-col items-start space-y-4">
        <div className="mb-2">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{description}</p>

        {/* ✅ FIXED: added href and target attributes */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block px-5 py-2 mt-4 text-sm font-semibold text-white uppercase tracking-wider
            bg-transparent border border-[#ff00ff] rounded-lg 
            hover:bg-[#ff00ff] transition duration-200 ease-in-out
            shadow-md shadow-[#ff00ff]/30
          "
        >
          {actionText}
        </a>
      </div>
    </div>
  );
};


const SKILLS_DATA: SkillItem[] = [
  {
    id: 1,
    title: "Paragon: DeFi Systems",
    description:
      "Contributed to the design and development of Paragon’s DeFi platform — focusing on creating intuitive user flows, efficient smart contract interactions, and seamless wallet integration for yield farming and staking operations.",
    icon: <ParagonIcon />,
    actionText: "View Project",
    color: "bg-gradient-to-br from-[#130428] to-[#251043]",
    link: "https://paragonpreview.vercel.app/",
  },
  {
    id: 2,
    title: "XT Exchange: Trading Interface",
    description:
      "Worked on building and refining the frontend interface for traders — optimizing performance, creating responsive dashboards, and enhancing real-time user interaction across multiple trading pairs.",
    icon: <ExchangeIcon />,
    actionText: "Explore Design",
    color: "bg-gradient-to-br from-[#251043] to-[#38126D]",
    link: "https://www.xt.com/en",
  },
  {
    id: 3,
    title: "Phoenix: Learning Platform",
    description:
      "Helped design and structure Phoenix, a learning platform built to empower job seekers — blending engaging UI components with a smooth learning experience tailored for career advancement.",
    icon: <PhoenixIcon />,
    actionText: "Learn More",
    color: "bg-gradient-to-br from-[#38126D] to-[#261045]",
    link: "https://0xblaize.github.io/phoenixwebsite.github.io/",
  },
  {
    id: 4,
    title: "Popmundo: Digital Marketplace",
    description:
      "Developed the interface and flow for Popmundo — a digital marketplace connecting users to list, discover, and trade unique digital assets through an engaging and trust-driven design.",
    icon: <MobileIcon />,
    actionText: "View Marketplace",
    color: "bg-gradient-to-br from-[#261045] to-[#190634]",
    link: "https://github.com/0xblaize/Popmundo123",
  },
];


const Experience: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#0f001f] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-xl sm:text-3xl font-extrabold text-white text-left md:ml-[15%]">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto scale-[0.9]">
          {SKILLS_DATA.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </div>


    </section>
  );
};

export default Experience;
