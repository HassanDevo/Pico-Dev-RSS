---
name: clippolish-film-looks
description: Use the ClipPolish Film Looks data pack with the ClipPolish MCP server. Two colour looks (3D LUTs): a warm film tone and a cool teal night. Use them with the Colour look effect, or on an adjustment layer to grade everything under it. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Film Looks — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 2 luts
- Pack id in the ClipPolish data: `community.film_looks` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/film-looks.clippolish.json`


## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/film-looks.clippolish.json` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
