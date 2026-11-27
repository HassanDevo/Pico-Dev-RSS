# Pico Dev RSS

Resource bundle for Pico Dev.

This repository contains the local files collected for Pico Dev: rootfs/bootstrap archives, render assets, companion packages, installers, language packs, mini apps, plugins, metadata, and reports.

## Important: large files

GitHub rejects normal Git files larger than 100 MB. The three large rootfs ZIPs are therefore attached to the `v1.0.0` GitHub Release instead of being committed into Git history.

See `LARGE_FILES.md` and `LARGE_FILES.tsv` for the exact files, sizes, SHA-256 hashes, and download links.

## Integrity

- `00_MANIFEST.tsv` — every file with size, SHA-256, source URL, and notes.
- `00_VERIFICATION.txt` — checksum verification results.
- `00_NAME_CHANGE_LOG.txt` — rebrand and cleanup log.

## Rebrand note

Text files were rebranded from the old app name to `Pico Dev` / `PicoDev` / `PICO DEV`. Signed/binary files were not edited internally; only their local filenames were renamed.

Updates were removed from this bundle because Pico Dev will use its own update files.
