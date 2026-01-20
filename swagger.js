import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts API",
      version: "1.0.0",
      description: "API for managing contacts (CSE 341 Project)"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server"
      },
      {
        url: "https://cse-341-project1-romel-q15q.onrender.com",
        description: "Production server"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

export const swaggerSpec = swaggerJsdoc(options);
