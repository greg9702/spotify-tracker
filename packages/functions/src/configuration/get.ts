import { ApiHandler } from "sst/node/api";
import { Configuration } from "@spotify-tracker/core/configuration";

export const handler = ApiHandler(async (evt) => {
  // TODO get this from evt
  const id = "9bd2acc2-5fd9-48bc-a7d6-533c968f6913";

  const user = await Configuration.fromID(id);

  return {
    statusCode: 200,
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };
});
