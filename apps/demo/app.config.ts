export default ({ config }: any) => ({
  ...config,
  name: "Flexa RN Starter (Demo)",
  slug: "flexa-rn-starter-demo",
  extra: {
    MOCK: process.env.MOCK === "1",
    PUBLISHABLE_KEY: process.env.PUBLISHABLE_KEY || ""
  }
});
