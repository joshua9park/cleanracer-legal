// The plans and the pricing questions, in one place: the home page and the pricing page both read this, so they cannot disagree.
// The limits must match the app's own plan definitions (packages/domain/src/plans.ts in the cleanracer repo) and the subscription_plans table.
export type Plan = { name: string; price: string; stops: string; drivers: string; featured?: boolean };

export const plans: Plan[] = [
  { name: "Starter", price: "$19.99", stops: "150 stops a month", drivers: "1 driver" },
  { name: "Growth", price: "$39.99", stops: "500 stops a month", drivers: "Up to 5 drivers", featured: true },
  { name: "Fleet", price: "$129.99", stops: "10,000 stops a month", drivers: "Up to 25 drivers" },
];

// Answers are trusted HTML written here (not user input).
export const faq: { q: string; a: string }[] = [
  { q: "What counts as a stop?", a: "A stop is each time your driver stops the van to make a pickup or a doorstep delivery. If you drop off several orders at the same house on one trip, that still counts as one stop. Starter's 150 stops cover about 75 full pickup-and-delivery cycles." },
  { q: "What if we go over our stops?", a: "We'll let you know as you get close to your limit. A store that goes well past it has 15 days to move to a bigger plan, and we never stop a driver mid-route." },
  { q: "What if I need more than Fleet covers?", a: "Running more than Fleet covers? <a href=\"mailto:support@cleanracer.com\">Write to us</a> and we'll work out a plan for your volume." },
  { q: "How do I join?", a: "You apply in the CR Business app. We check your business license and call the number on your Google listing, then you subscribe through the App Store or Google Play to open your store. Cancel any time in your App Store or Google Play settings." },
];
