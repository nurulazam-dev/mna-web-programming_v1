"use client";
import React, { useEffect, useState, memo } from "react";
import brandLogo from "../../../public/images/logo/MNA-Web-Programming-logo.png";
import Image from "next/image";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiFirebaseFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// --- Type Definitions ---
type IconType =
  | "html"
  | "css"
  | "javascript"
  | "vsCode"
  | "firebase"
  | "github"
  | "react"
  | "mongodb"
  | "node"
  | "tailwind"
  | "express"
  | "nextJs"
  | "git";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => <FaHtml5 className="text-[#E34F26] h-6 w-6" />,
    color: "#E34F26",
  },
  css: {
    component: () => <FaCss3 className="text-[#1572B6] h-6 w-6" />,
    color: "#1572B6",
  },
  javascript: {
    component: () => <TbBrandJavascript className="text-[#F7DF1E] h-6 w-6" />,
    color: "#F7DF1E",
  },
  vsCode: {
    component: () => <VscVscode className="text-[#F7DF1E] h-6 w-6" />,
    color: "#F7DF1E",
  },
  firebase: {
    component: () => <RiFirebaseFill className="text-[#F7DF1E] h-6 w-6" />,
    color: "#F7DF1E",
  },
  github: {
    component: () => <FaGithub className="text-[#F7DF1E] h-6 w-6" />,
    color: "#F7DF1E",
  },
  react: {
    component: () => <FaReact className="text-[#61DAFB] h-6 w-6" />,
    color: "#61DAFB",
  },
  mongodb: {
    component: () => <SiMongodb className="text-[#4DB33D] h-6 w-6" />,
    color: "#4DB33D",
  },
  node: {
    component: () => <FaNodeJs className="text-[#339933] h-6 w-6" />,
    color: "#339933",
  },
  tailwind: {
    component: () => <RiTailwindCssFill className="text-[#06B6D4] h-6 w-6" />,
    color: "#06B6D4",
  },
  express: {
    component: () => <SiExpress className="text-[#06B6D4] h-6 w-6" />,
    color: "#06B6D4",
  },
  nextJs: {
    component: () => <RiNextjsLine className="text-[#06B6D4] h-6 w-6" />,
    color: "#06B6D4",
  },
  git: {
    component: () => <FaGitAlt className="text-[#06B6D4] h-6 w-6" />,
    color: "#06B6D4",
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (3 icons)
  {
    id: "html",
    orbitRadius: 115,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 115,
    size: 42,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 115,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "JavaScript",
  },
  {
    id: "vsCode",
    orbitRadius: 115,
    size: 40,
    speed: 1,
    iconType: "vsCode",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "VS Code",
  },
  {
    id: "firebase",
    orbitRadius: 115,
    size: 40,
    speed: 1,
    iconType: "firebase",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "Firebase",
  },
  {
    id: "github",
    orbitRadius: 115,
    size: 40,
    speed: 1,
    iconType: "github",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "GitHub",
  },
  // Outer Orbit (7 icons, evenly spaced)
  {
    id: "react",
    orbitRadius: 160,
    size: 43,
    speed: -0.5,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "mongodb",
    orbitRadius: 160,
    size: 43,
    speed: -0.5,
    iconType: "mongodb",
    phaseShift: (2 * Math.PI) / 7,
    glowColor: "purple",
    label: "MongoDB",
  },
  {
    id: "node",
    orbitRadius: 160,
    size: 45,
    speed: -0.5,
    iconType: "node",
    phaseShift: (4 * Math.PI) / 7,
    glowColor: "purple",
    label: "Node.js",
  },
  {
    id: "tailwind",
    orbitRadius: 160,
    size: 40,
    speed: -0.5,
    iconType: "tailwind",
    phaseShift: (6 * Math.PI) / 7,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
  {
    id: "express",
    orbitRadius: 160,
    size: 40,
    speed: -0.5,
    iconType: "express",
    phaseShift: (8 * Math.PI) / 7,
    glowColor: "purple",
    label: "Express.js",
  },
  {
    id: "nextJs",
    orbitRadius: 160,
    size: 42,
    speed: -0.5,
    iconType: "nextJs",
    phaseShift: (10 * Math.PI) / 7,
    glowColor: "purple",
    label: "Next.js",
  },
  {
    id: "git",
    orbitRadius: 160,
    size: 40,
    speed: -0.5,
    iconType: "git",
    phaseShift: (12 * Math.PI) / 7,
    glowColor: "purple",
    label: "Git",
  },
];

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 1.8}px`,
          height: `${radius * 1.8}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 30px ${colors.primary}, inset 0 0 50px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  }
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 120, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];

  return (
    <main className="w-full flex items-center justify-center overflow-hidden p-10 pb-7">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[330px] md:h-[330px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Image
          src={brandLogo}
          alt="MNA Web Programming"
          width={220}
          height={220}
        />
        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}
        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
