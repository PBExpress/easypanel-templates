import {
  createTemplate,
  Services,
} from "~templates-utils";

export default createTemplate({
  name: "Flame",
  schema: {
    type: "object",
    required: [
      "projectName",
      "serviceName",
      "domain",
      "password",
    ],
    properties: {
      projectName: {
        type: "string",
        title: "Project Name",
      },
      serviceName: {
        type: "string",
        title: "App Service Name",
        default: "flame",
      },
      domain: {
        type: "string",
        title: "Domain",
      },
      password: {
        type: "string",
        title: "Password",
      },
    },
  } as const,
  generate({
    projectName,
    serviceName,
    domain,
    password,
  }) {
    const services: Services = [];

    services.push({
      type: "app",
      data: {
        projectName,
        serviceName: serviceName,
        source: {
          type: "image",
          image: "pawelmalak/flame",
        },
        env: `PASSWORD=${password}`,
        proxy: {
          port: 5005,
          secure: true,
        },
        domains: [{ name: domain }],
        volumes: [
          {
            type: "volume",
            source: "data",
            target: "/app/data",
          },
        ],
      },
    });

    return { services };
  },
});