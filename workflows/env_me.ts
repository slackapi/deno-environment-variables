import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { EnvFunction } from "../functions/env_getter.ts";

export const EnvMeWorkflow = DefineWorkflow("env_me", {
  input_parameters: {
    channel: {
      type: Schema.slack.types.channel_id,
      description: "Channel where the shortcut is triggered.",
    },
  },
  title: "Env me!",
  description: "Finds out the API_KEY environment variable and prints it.",
});

const getEnvStep = EnvMeWorkflow.addStep(EnvFunction, {});

EnvMeWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: EnvMeWorkflow.inputs.channel,
  message:
    `The value of API_KEY is: *${getEnvStep.outputs.api_key}* on this workspace`,
});
