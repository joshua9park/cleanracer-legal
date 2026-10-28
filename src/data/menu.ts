// The pages in the menu (the hamburger in the header). To add a page, add a line here; to make a new heading, add a group.
export type MenuLink = { label: string; href: string };
export type MenuGroup = { heading?: string; links: MenuLink[] };

export const menu: MenuGroup[] = [
  { links: [
    { label: "For Cleaners", href: "/" },
    { label: "For Customers", href: "/customers/" },
    { label: "How It Works", href: "/how-it-works/" },
    { label: "Pricing", href: "/pricing/" },
    { label: "About Us", href: "/about/" },
  ] },
  { heading: "Guides", links: [
    { label: "Get Started with Clean Racer Business", href: "/guides/get-started/" },
    { label: "Running Your Orders", href: "/guides/running-orders/" },
  ] },
  { heading: "Help and legal", links: [
    { label: "Support", href: "/support/" },
    { label: "Terms of Use", href: "/terms/" },
    { label: "Privacy Policy", href: "/privacy/" },
  ] },
];
