import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPIClient } from "slack-cloud-sdk/mod.ts";
import { EnvFunction } from "./env_getter.ts";

const client = new SlackAPIClient("");

Deno.test("Dino function test", async () => {
  const inputs = { name: "mike" };
  const { outputs } = await EnvFunction.run({
    inputs,
    client,
    env: { "API_KEY": "mykey" },
  });
  assertEquals(outputs?.api_key, "mykey");
});
