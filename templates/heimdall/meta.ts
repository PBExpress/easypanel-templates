// Generated using "yarn build-templates"

export const meta = {
  name: "Heimdall",
  description:
    "Heimdall Application Dashboard is a dashboard for all your web applications. It doesn't need to be limited to applications though, you can add links to anything you like. There are no iframes here, no apps within apps, no abstraction of APIs. if you think something should work a certain way, it probably does.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://heimdall.site/" },
    { label: "Documentation", url: "https://heimdall.site/" },
    { label: "Github", url: "https://github.com/linuxserver/Heimdall" },
  ],
  contributors: [
    { name: "Ponky", url: "https://github.com/Ponkhy" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "domain", "appServiceName"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      domain: { type: "string", title: "Domain" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "heimdall",
      },
      serviceTimezone: {
        type: "string",
        title: "Timezone",
        default: "Europe/London",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type Domain = string;
export type AppServiceName = string;
export type Timezone = string;

export interface Input {
  projectName: ProjectName;
  domain: Domain;
  appServiceName: AppServiceName;
  serviceTimezone?: Timezone;
}
