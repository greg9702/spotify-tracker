import { StackContext, Api } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        environment: {
          SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || "",
          SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || "",
        },
      },
    },
    routes: {
      "GET /configuration": "packages/functions/src/configuration/get.handler",
      "POST /configuration":
        "packages/functions/src/configuration/create.handler",
      "GET /hello": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return {
    api,
  };
}
