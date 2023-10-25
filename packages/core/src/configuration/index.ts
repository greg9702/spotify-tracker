import { randomUUID } from "crypto";

export * as Configuration from "./";

export enum ConfigurationType {
  EMAIL = 1,
}

export type Configuration = {
  Id: string;
  Username: string;
  Type: ConfigurationType;
  Metadata: string;
};

export async function create(
  username: string,
  type: ConfigurationType,
  metdata: string
): Promise<string> {
  return randomUUID();
}

export async function fromID(id: String): Promise<Configuration> {
  return {
    Id: "9bd2acc2-5fd9-48bc-a7d6-533c968f6913",
    Username: "user",
    Type: ConfigurationType.EMAIL,
    Metadata: JSON.stringify({ address: "foo@bar.com" }),
  };
}
