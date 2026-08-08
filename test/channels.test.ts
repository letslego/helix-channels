import assert from "node:assert/strict";
import { test } from "node:test";
import { httpChannel, webChannel, slackChannel } from "../src/index.js";

test("defines channels", () => {
  assert.equal(httpChannel().kind, "http");
  assert.equal(webChannel().kind, "web");
  assert.equal(slackChannel().kind, "slack");
});
