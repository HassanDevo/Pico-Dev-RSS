---
name: clippolish-particle-pack
description: Use the ClipPolish Particle Pack data pack with the ClipPolish MCP server. Six ready-made particle systems: rising embers, fireflies, falling leaves, floating hearts, a star burst and soft bokeh. Pick them in a Particles element. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Particle Pack — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 6 particles
- Pack id in the ClipPolish data: `community.particle_pack` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/particle-pack.clippolish.json`


## Requirements

{"app": "0.1.1"}

## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/particle-pack.clippolish.json` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
