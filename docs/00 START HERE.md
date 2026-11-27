# Start here: the Nolan website rebuild

*Tidied 23 November 2026, updated 27 November. Launch is Tuesday 15 December (content freeze Wednesday 9 December, go/no-go Friday 11 December).*

## The one thing to remember

**The GitHub repo is the master copy.** That is `MarzipanMedia/nolan-family-law`. Claude Code builds from it, and the decision log and build notes inside it are always the most up to date.

The `export` folder beside this note is a copy of the repo's `export` folder, taken at 3pm on 23 November. It's here so design sessions can read it. If it ever disagrees with the repo, the repo wins.

The confusion came from copies of `DECISIONS.md` and `BUILD-NOTES.md` being edited in several places at once: a Claude Design copy, a Claude Code copy and the folders on this computer. Twice the same decision numbers were used for different things. The repo has since sorted that out and runs from D-01 to D-57 with a note where numbers were reshuffled.

## How the pieces fit together

Each page goes round the same loop:

1. **Design it in a Claude chat** in the Nolan SEO project. That session writes the copy, designs the page and exports an HTML prototype, plus updates to `DECISIONS.md` and `BUILD-NOTES.md`.
2. **Get those files into the repo.** Either upload them to the repo's `export` folder, or hand them straight to Claude Code and ask it to merge them.
3. **Claude Code builds the page** from the prototype, runs its checks (redirects, twin test, nav test, house rules), and updates the decision log and build notes in the repo.
4. **Before the next design session, start from the repo again.** Ask the chat to read `MarzipanMedia/nolan-family-law` first (it's a public repo, so Claude can read it without setup), or refresh this `export` folder from it.

Step 4 is the one that was being skipped, which is how the copies drifted apart.

## What's in each folder

| Folder | What it holds |
|---|---|
| `export` | The current planning files and page prototypes, copied from the repo |
| `mediation-assets`, `melbourne-assets` | Photos used in the designs |
| `reference` | The firm's contact numbers |
| `_archive 23 Nov (old copies, safe to ignore)` | Everything that was scattered before: older exports, backups, upload folders, the zips, and the hand-off prompts. Nothing was deleted |

Inside `export`, the files to read first are `DECISIONS.md` (every decision and the open questions at the end), `BUILD-NOTES.md` (its "Left to do" list near the end is the current to-do list), `LAUNCH-PLAN.md` and `DESIGN.md`.

## Where things stand

**Designed and built:** homepage, Sydney hub, Melbourne hub, child custody (Sydney), property settlement (Sydney), mediation (Sydney), and both prenup pages. The header now follows the page's city, `/melbourne/mediation/` exists as a plain page, and the twin test passes (the prenup pair is down from 89% shared wording to 2.5%).

**All the old hand-off prompts are done**, so they're in the archive. You don't need to paste any of them again.

**Sydney divorce: designed 27 Nov, waiting for Claude Code.** Everything is in `upload/Sydney divorce/`. Paste the prompt from its `README.md` into Claude Code. It also fixes an out-of-date sentence on the Sydney hub: divorce law changed on 10 June 2025 (D-59).

**Next page being designed: Sydney de facto** (decided 27 Nov). Run the divorce step in Claude Code first. Then open `HANDOFF-sydney-de-facto.md` beside this note and paste the part below the line into a new chat in the Nolan SEO project. After that: Melbourne property settlement, then Melbourne child custody if there is time before the freeze. Collaborative law, domestic violence and consent orders stay in the carry-over template at launch and are redesigned in January (D-22). Consent orders still needs Q-3 decided.

**Still to build:** the Fees and Disclaimer pages (the redirect test fails until they exist, because every footer links to them), the four Melbourne articles, designed versions of the other Melbourne service pages, Our People and Contact, and six placeholder images.

**Waiting on you:**

- the Vercel project, and where enquiries should be sent (`ENQUIRY_WEBHOOK_URL`)
- which GTM container to keep (Q-12)
- a Google Places API key, for the live reviews
- the Melbourne office level, 23 or 33 (Q-4)
- the Rank Math redirect export (Q-9)
- what to do about "specialist" in 23 imported profiles (Q-14)
- sign-off on the new homepage meta description and the Melbourne mediation copy

**Waiting on Chad:** who mediates in Melbourne (Q-11) and Law Institute of Victoria membership (Q-16).

## To get Claude Code back on track

Open Claude Code on the repo and paste:

> Read README.md, export/DECISIONS.md and the "Left to do" list at the end of export/BUILD-NOTES.md. Tell me in plain words where the build is, what's blocked and on whom, and what you suggest doing next before the 9 December freeze.
