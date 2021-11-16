import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const EnvFunction = DefineFunction(
  "env-var-tester",
  {
    title: "Environment Variable Tester",
    description: "Prints out environment variables",
    input_parameters: {},
    output_parameters: {
      api_key: {
        type: Schema.types.string,
        description: "The value of API_KEY",
      },
    },
  },
  async ({ env }) => {
    // This is where you can use your environment variables.
    console.log(`API_KEY_FREE is ${env["API_KEY"]}`);
    return await {
      outputs: {
        api_key: `${env["API_KEY"]}`,
      },
    };
  },
);
