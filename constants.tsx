import React from "react";
import { Project, Service, Testimonial, SuccessStory } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Glow Up Beauty",
    category: "Brand Strategy & Content",
    stats: [
      { label: "Followers Growth", value: "+45%" },
      { label: "Engagement Rate", value: "8.2%" },
    ],
    image: "https://picsum.photos/seed/beauty/800/600",
    description:
      "Rebranded Glow Up Beauty across Instagram and TikTok, focusing on high-energy video content and community engagement.",
  },
  {
    id: "2",
    title: "EcoEats Organics",
    category: "Community Management",
    stats: [
      { label: "Reach", value: "250K+" },
      { label: "Comments/Post", value: "120 avg" },
    ],
    image: "https://picsum.photos/seed/food/800/600",
    description:
      "Developed a sustainable content calendar that resonated with eco-conscious consumers, leading to a massive increase in organic reach.",
  },
  {
    id: "3",
    title: "TechNexus Solutions",
    category: "B2B LinkedIn Growth",
    stats: [
      { label: "Leads Generated", value: "+120%" },
      { label: "Inbound Inquiries", value: "30/mo" },
    ],
    image: "https://picsum.photos/seed/tech/800/600",
    description:
      "Positioned C-suite executives as industry thought leaders through strategic LinkedIn content and networking.",
  },
];

export const AI_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "ss1",
    brandName: "Darxkin",
    handle: "michael_darxkin",
    platform: "Instagram",
    strategyName: "Atmospheric Storytelling & Visual Metaphors",
    impact:
      'Leveraged AI to identify high-retention hooks within the artistic process, resulting in multiple viral Reels that humanized the "Darxkin" persona.',
    stats: [
      { label: "Engagement Boost", value: "210%" },
      { label: "Viral Reels", value: "4" },
    ],
  },
  {
    id: "ss2",
    brandName: "Luna Wellness",
    platform: "TikTok",
    strategyName: "Educational Micro-Content Loop",
    impact:
      'AI-optimized script structures for 15-second "Wellness Myths" videos that increased shareability and comment density.',
    stats: [
      { label: "Saved Posts", value: "12K+" },
      { label: "Share Rate", value: "15.4%" },
    ],
  },
  {
    id: "ss3",
    brandName: "FinFlow SaaS",
    platform: "LinkedIn",
    strategyName: "Authority-Building Carousels",
    impact:
      "Automated data analysis of industry pain points to generate precise content pillars that spoke directly to decision-makers.",
    stats: [
      { label: "Inbound Leads", value: "+85%" },
      { label: "Profile Views", value: "25K/mo" },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Social Media Strategy",
    description:
      "Data-driven roadmaps designed to align your social presence with your core business goals.",
    icon: "📊",
  },
  {
    id: "s2",
    title: "Content Creation",
    description:
      "High-quality photography, short-form video (Reels/TikTok), and compelling graphic design.",
    icon: "📸",
  },
  {
    id: "s3",
    title: "Community Management",
    description:
      "Turning followers into fans by engaging with your audience and managing inquiries 24/7.",
    icon: "💬",
  },
  {
    id: "s4",
    title: "Paid Ad Campaigns",
    description:
      "Strategic Meta and LinkedIn ads focused on ROI, conversion, and precise audience targeting.",
    icon: "🚀",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t3",
    name: "Michael Darxkin",
    role: "Artist",
    company: "Darxkin",
    text: "Moses has an incredible eye for artistic branding. He translated my creative process into a digital narrative that resonates deeply with my audience. The growth on my Instagram (@michael_darxkin) has been phenomenal.",
    avatar: "/components/img/WhatsApp Image 2026-02-03 at 21.32.51.jpeg",
  },
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Lumiere Skincare",
    text: "Working with Moses was a game-changer. Our engagement tripled in just three months, and the quality of leads we're getting is phenomenal.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "t2",
    name: "Mark Thompson",
    role: "Founder",
    company: "Urban Fit",
    text: "The creative direction provided for our TikTok launch was exactly what we needed. We went viral twice in the first month!",
    avatar: "https://i.pravatar.cc/150?u=mark",
  },
];
