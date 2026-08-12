export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'education-blog',
  name: 'The Margin',
  origin: 'https://education-blog.oriz.in',
  tagline: 'A working notebook on how to learn',
  description:
    'Study methods that stick, learning to code the honest way, and the best free resources — by Chirag Singhal.',
}
