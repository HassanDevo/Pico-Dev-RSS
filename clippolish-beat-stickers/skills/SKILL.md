---
name: clippolish-beat-stickers
description: Use the ClipPolish Beat Stickers data pack with the ClipPolish MCP server. A sticker pack (star, sparkle, heart and a pulsing ring), a walkie-talkie sound preset and a “Beat flash” effect that moves with the music. Pico Dev wrapper with the original pack data and a usage skill.
---

# ClipPolish Beat Stickers — Pico Dev

A standalone Pico Dev skill that carries a real ClipPolish data pack. It is data, not code: install
the bundled file into ClipPolish, then use the normal ClipPolish tools from the main ClipPolish skill.

## What is in this pack

- 1 effects, 1 stickers, 1 audioFx
- Pack id in the ClipPolish data: `community.beat_stickers` (kept for ClipPolish compatibility).
- Author: HassanDevo / Pico Dev.
- Bundled data: `data/beat-stickers.clippolish.zip`
- Extracted, standalone resources: `data/beat-stickers/` (relative asset paths resolve inside that folder).


## Use it

1. With the ClipPolish MCP available, install the bundled data with
   `install_plugin path=<installed-plugin-dir>/data/beat-stickers.clippolish.zip` (the `.zip` works for picture/sound packs).
2. Ask ClipPolish to `describe_model` for the relevant part names if you need exact arguments.
3. Apply the pack from the ClipPolish editor (Components, Effects → Colour look, Templates,
   Plugins → run on recordings, Sounds, etc.), depending on the data sections listed above.
4. Re-installing the same ClipPolish id updates the pack; bump the data `version` when you change it.

All paths in this skill are relative to the installed plugin folder, so it works standalone.
