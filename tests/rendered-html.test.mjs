import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Fluid Labs company site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Fluid Labs LLC \| Independent Software Studio<\/title>/i,
  );
  assert.match(html, /Fluid Labs LLC/);
  assert.match(html, /FitnessCoach/);
  assert.match(html, /contact@fluidlabs\.com/);
  assert.match(html, /A Fluid Labs product/);
  assert.doesNotMatch(html, /https:\/\/fitnesscoach\.app/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|taking shape/i);
});

test("keeps the hero artwork static", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(css, /@keyframes|animation\s*:/i);
});
