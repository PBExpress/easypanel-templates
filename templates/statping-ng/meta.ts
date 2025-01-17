// Generated using "yarn build-templates"

export const meta = {
  name: "Statping-ng",
  description:
    "An easy to use Status Page for your websites and applications. Statping will automatically fetch the application and render a beautiful status page with tons of features for you to build an even better status page. This Status Page generator allows you to use MySQL, Postgres, or SQLite on multiple operating systems.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://github.com/statping/statping" },
    { label: "Documentation", url: "https://github.com/statping/statping" },
    { label: "Github", url: "https://github.com/statping/statping" },
  ],
  contributors: [
    { name: "Ponky", url: "https://github.com/Ponkhy" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "domain",
      "appServiceName",
      "databaseType",
      "databaseServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      domain: { type: "string", title: "Domain" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "statping-ng",
      },
      databaseType: {
        type: "string",
        title: "Database Type",
        default: "sqlite",
        oneOf: [
          { enum: ["sqlite"], title: "SQLite" },
          { enum: ["postgres"], title: "Postgres" },
          { enum: ["mysql"], title: "MySQL" },
        ],
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "statping-ng-db",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type Domain = string;
export type AppServiceName = string;
export type DatabaseType = DatabaseType1 & DatabaseType2;
export type DatabaseType1 = SQLite | Postgres | MySQL;
export type SQLite = "sqlite";
export type Postgres = "postgres";
export type MySQL = "mysql";
export type DatabaseType2 = string;
export type DatabaseServiceName = string;

export interface Input {
  projectName: ProjectName;
  domain: Domain;
  appServiceName: AppServiceName;
  databaseType: DatabaseType;
  databaseServiceName: DatabaseServiceName;
}
