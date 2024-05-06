import withNextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})(nextConfig);
