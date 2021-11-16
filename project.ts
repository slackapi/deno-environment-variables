import { Project } from "slack-cloud-sdk/mod.ts";
import { EnvFunction } from "./functions/env_getter.ts";
import { EnvMeWorkflow } from "./workflows/env_me.ts";
import { EnvMeShortcut } from "./triggers/envme_shortcut.ts";

Project({
  name: "environment-variables",
  description: "A very basic Deno runtime",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  functions: [EnvFunction],
  workflows: [EnvMeWorkflow],
  triggers: [EnvMeShortcut],
  outgoingDomains: [],
});
