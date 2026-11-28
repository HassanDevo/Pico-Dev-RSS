---
name: clippolish-neon-fx
description: Use the ClipPolish Neon FX data pack with the ClipPolish MCP server. A glowing neon edge for any element, a jelly wobble you can drop on titles and stickers, and a snappy “whip” easing curve. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Neon FX — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 1 effects, 1 behaviors, 1 eases
- Pack id in the ClipPolish data: `community.neon_fx` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/neon-fx.clippolish.json`


## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/neon-fx.clippolish.json` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
