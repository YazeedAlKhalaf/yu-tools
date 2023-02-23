export interface Tool {
  isFeatured: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  githubLink?: string;
  twitterLink?: string;
  websiteLink?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
}
