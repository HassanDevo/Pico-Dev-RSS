---
name: clippolish-party-titles
description: Use the ClipPolish Party Titles data pack with the ClipPolish MCP server. A celebration title scene with confetti and glowing text. Builds on Particle pack and Neon titles: install those first. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Party Titles — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 1 templates
- Pack id in the ClipPolish data: `community.party_titles` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/party-titles.clippolish.json`


## Requirements

{"app": "0.1.1", "plugins": ["community.particle_pack@1", "community.neon_titles@1"]}

## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/party-titles.clippolish.json` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
