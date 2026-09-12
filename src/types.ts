export interface AwardBadge {
  name: string;
  type: 'sotd' | 'developer' | 'honors' | 'mobile_excellence' | 'site_of_the_month';
  year: string;
}

export interface ProjectScores {
  design: number;
  usability: number;
  creativity: number;
  content: number;
  total: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  year: string;
  url: string;
  displayUrl: string;
  headerImage: string;
  imageAspectRatio?: number;
  previewType?: 'image' | 'interactive';
  colorAccent: string;
  awards: AwardBadge[];
  scores: ProjectScores;
  techStack: string[];
  deliverables: string[];
  description: string;
  featured: boolean;
  isCustomAdded?: boolean;
  dateAdded?: string;
}

export type ViewMode = 'grid' | 'feed' | 'compact';
export type SortOption = 'featured' | 'score' | 'year-desc' | 'title-asc';
