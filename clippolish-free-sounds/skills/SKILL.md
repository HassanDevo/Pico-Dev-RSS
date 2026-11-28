---
name: clippolish-free-sounds
description: Use the ClipPolish Free Sounds data pack with the ClipPolish MCP server. 30 short sounds for edits: whooshes, risers, impacts, pops, clicks, dings, typing, a camera shutter, a cash register, boing, slide whistles and more. Made from scratch by Pico Dev (synthesised, no samples): free to use in any video. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Free Sounds — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 30 sounds
- Pack id in the ClipPolish data: `clippolish.free_sounds` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/free-sounds.clippolish.zip`
- Extracted, standalone resources: `data/free-sounds/` (relative asset paths resolve inside that folder).


## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/free-sounds.clippolish.zip` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
