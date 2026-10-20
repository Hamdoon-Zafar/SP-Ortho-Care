import { clinic, services, team } from '@/content/clinic';
// CMS seam: swap these bodies for Sanity/Contentful fetches. Runs at build time (SSG).
export async function getClinic() { return clinic; }
export async function getServices() { return services; }
export async function getTeam() { return team; }
