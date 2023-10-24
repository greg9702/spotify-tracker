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
