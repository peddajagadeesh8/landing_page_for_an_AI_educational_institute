import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interactive Learning Modules",
    description:
      "Engage with hands-on, interactive modules that make complex AI concepts easy to understand.",
  },
  {
    icon: <Fingerprint />,
    text: "Flexible Learning Paths",
    description:
      "Choose from various courses tailored to your interests and career goals, allowing you to learn at your own pace.",
  },
  {
    icon: <ShieldHalf />,
    text: "Project-Based Learning",
    description:
      "Apply your knowledge through real-world projects that enhance your skills and build your portfolio.",
  },
  {
    icon: <BatteryCharging />,
    text: "Expert-Led Workshops",
    description:
      "Participate in live workshops led by industry experts to gain practical insights and best practices in AI.",
  },
  {
    icon: <PlugZap />,
    text: "Peer Collaboration",
    description:
      "Collaborate with fellow students on group projects, fostering teamwork and diverse perspectives in AI development.",
  },
  {
    icon: <GlobeLock />,
    text: "Progress Tracking",
    description:
      "Monitor your learning journey with a comprehensive dashboard that tracks your progress and achievements.",
  },
];

export const checklistItems = [
  {
    title: "AI-Powered Curriculum",
    description:
      "Master essential AI concepts with our dynamic, hands-on courses.",
  },
  {
    title: "Collaborate with Experts",
    description:
      "Engage with industry professionals and receive personalized feedback on your projects.",
  },
  {
    title: "Real-Time Insights",
    description:
      "Track your progress and gain valuable insights into your learning patterns.",
  },
  {
    title: "Streamlined Learning Experience",
    description:
      "Access resources and materials in just a few clicks to maximize your study time.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to Introductory Courses",
      "Community Forum Participation",
      "Basic Learning Resources",
    ],
  },
  {
    title: "Pro (Most Popular)",
    price: "$10/Month",
    features: [
      "Access to All Courses",
      "Personalized Learning Path",
      "Live Q&A Sessions with Experts",
      "Project Feedback and Reviews",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Unlimited Access to All Courses",
      "Customized Training Programs",
      "Dedicated Support and Mentorship",
      "Advanced Analytics and Progress Tracking",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
