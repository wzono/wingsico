export interface Profile {
  name: string;
  githubUsername: string;
  links?: Badge[];
  badges?: Badge[];
  stacks?: Badge[];
  projects?: string[];
  countOfRecentStarDisplay?: number;
  countOfRandomStarDisplay?: number;
  footer?: string;
  statsDisplay?: boolean;
}

export type Badge = {
  text: string;
  logo?: string;
  bgColor?: string;
  href?: string;
};

export function defineProfile(profile: Profile) {
  return profile;
}
