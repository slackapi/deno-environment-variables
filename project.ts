import { Project } from "slack-cloud-sdk/mod.ts";
import { EnvMeShortcut } from "./triggers/envme_shortcut.ts";

Project({
  name: "environment-variables",
  description: "A very basic Deno runtime",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: ["commands", "chat:write", "chat:write.public"],
  triggers: [EnvMeShortcut],
  outgoingDomains: [],
});
