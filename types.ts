
export interface Project {
  id: string;
  title: string;
  category: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface ContentIdea {
  day: string;
  topic: string;
  caption: string;
  hashtags: string[];
  visualSuggestion: string;
}

export interface SuccessStory {
  id: string;
  brandName: string;
  handle?: string;
  platform: string;
  strategyName: string;
  impact: string;
  stats: {
    label: string;
    value: string;
  }[];
}
