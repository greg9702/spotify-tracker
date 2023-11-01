import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {},
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
}
