export const BRANDS = {
  localconvert: {
    name: "LocalConvert Pro",
    short: "LC Pro",
    domain: "localconvert.pro",
    primary: "#5B8DEF",
    secondary: "#0EA5E9",
    dark: "#0B1220",
    light: "#F8FAFC",
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-500",
    tagline: "Turn Local Traffic into Paying Customers",
    logoText: "LocalConvert Pro",
    ctaPhone: "+1 (555) 555-1234",
    ctaEmail: "hello@localconvert.pro",
  },
} as const;

export type Brand = typeof BRANDS[keyof typeof BRANDS];
