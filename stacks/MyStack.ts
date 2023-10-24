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
      function: {},
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /user/{email}": "backend/api/lambda.getUser",
      "POST /user": "backend/api/lambda.addUser",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
