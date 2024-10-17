# Deno Google Forms Webhook
Test out Deno and a webhook add on to export Google Forms data

## Testing Locally
1. Install `deno`: https://docs.deno.com/runtime/getting_started/installation/
1. `deno run --allow-read --allow-env --allow-net index.ts`
  1. If you prefer, you can also just do `deno run index.ts` and then accept permissions interactively

## Deploying
1. One time install: `deno install -Arf --global jsr:@deno/deployctl`
1. `deployctl deploy`
