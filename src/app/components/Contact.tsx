"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const DEEP_BG_COLOR = "#0f001f";

// Custom Farcaster icon
const FarcasterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {/* Replace with actual Farcaster SVG path */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

interface IconButtonProps {
  href: string;
  icon: React.ElementType | any; // Accept React component or FontAwesome icon
  title: string;
}

const IconButton: React.FC<IconButtonProps> = ({ href, icon, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20 transition duration-150 hover:bg-white/20 hover:border-white/40"
  >
    {typeof icon === "function" ? (
      React.createElement(icon, { className: "w-4 h-4 text-white" })
    ) : (
      <FontAwesomeIcon icon={icon} className="w-4 h-4 text-white" />
    )}
  </a>
);

export default function Contact() {
  const GITHUB_URL = "https://github.com/0xblaize";
  const TWITTER_URL = "https://x.com/0xblaize";
  const FARCASTER_URL = "https://farcaster.xyz/blaize"; // Updated Farcaster profile link
  const EMAIL_ADDRESS = "Blaizedami@gmail.com";

  return (
    <section
      className="py-6 px-4 max-w-2xl mx-auto space-y-4"
      id="contact"
      style={{ backgroundColor: DEEP_BG_COLOR }}
    >
      <h2 className="text-xl font-medium text-white">Contact</h2>

      <p className="text-gray-300 text-sm">
        Looking to join a team passionate about building products that make life
        simpler and smarter. Let’s connect.
      </p>

      <div className="space-y-1">
        <p className="text-white text-sm">Drop me a line:</p>
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="text-sm text-white underline hover:no-underline"
        >
          {EMAIL_ADDRESS}
        </a>
      </div>

      <div className="flex justify-start items-center space-x-4">
        <IconButton href={GITHUB_URL} icon={faGithub} title="GitHub Profile" />
        <IconButton href={TWITTER_URL} icon={faXTwitter} title="X (Twitter) Profile" />
        <IconButton href={FARCASTER_URL} icon={FarcasterIcon} title="Farcaster Profile" />
        <IconButton href={`mailto:${EMAIL_ADDRESS}`} icon={faEnvelope} title="Send Email" />
      </div>
    </section>
  );
}
