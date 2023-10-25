import { ApiHandler } from "sst/node/api";
import { Configuration } from "@spotify-tracker/core/configuration";

export const handler = ApiHandler(async (evt) => {
  // TODO get this from evt
  const username = "user";
  const type = Configuration.ConfigurationType.EMAIL;
  const metadata = JSON.stringify({ address: "foo@bar.com" });

  const id = await Configuration.create(username, type, metadata);
  console.log("Created user", id);

  // TODO publish event here

  return {
    statusCode: 200,
    body: JSON.stringify({ id: id }),
    headers: {
      "Content-Type": "application/json",
    },
  };
});
