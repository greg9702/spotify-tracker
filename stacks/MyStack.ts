import { StackContext, Api, Table } from "sst/constructs";

export function API({ stack }: StackContext) {
  const table = new Table(stack, "SpotifyTracker", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  });
  const api = new Api(stack, "api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
