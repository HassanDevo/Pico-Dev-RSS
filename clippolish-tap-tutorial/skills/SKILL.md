---
name: clippolish-tap-tutorial
description: Use the ClipPolish Tap Tutorial data pack with the ClipPolish MCP server. For screen recordings: zooms in on every tap, outlines the tapped button and adds a “Tap …” caption. Runs only when you apply it (or turn on “Run on every new recording”). Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Tap Tutorial — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 2 rules
- Pack id in the ClipPolish data: `community.tap_tutorial` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/tap-tutorial.clippolish.json`


## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/tap-tutorial.clippolish.json` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
