import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { FrontendStack } from "./stacks/FrontendStack";

export default {
  config(_input) {
    return {
      name: "spotify-tracker",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ApiStack).stack(FrontendStack);
  },
} satisfies SSTConfig;
