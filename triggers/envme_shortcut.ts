import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { EnvMeWorkflow } from "../workflows/env_me.ts";

export const EnvMeShortcut = DefineTrigger("env_me", {
  type: TriggerTypes.Shortcut,
  name: "EnvMe",
  description:
    "Returns the value of the API_KEY environment variable",
})
  .runs(EnvMeWorkflow)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
  }));
