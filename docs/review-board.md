# The review board (`/review/`, staging only)

A page on the staging site where Chad and Tash can see what is built, tick what they are happy
with, and leave notes. Ben gets an email for every tick and note.

It does not exist on the live site: with `SITE_ENV=production` both `/review/` and `/api/review`
return 404. On staging it sits behind the staging password like every other page.

## How the list is made

`src/review/board.ts` reads the routes file, so the board updates itself as pages are built:

| On the board | Comes from |
|---|---|
| Ready for your review | Live routes with a designed page in `src/site/registry.ts`, plus any listed in `ASSUME_DESIGNED` (pages being built right now) |
| Questions only you can answer | `QUESTIONS` in `board.ts` (copied from the open questions in `export/DECISIONS.md`) |
| Still to be designed | Live pages still in the temporary carry-over template. Every one will be designed. Team profiles and articles are not on the board |
| Coming next | Routes still marked `planned` |
| Decisions so far | `export/DECISIONS.md`, copied into `src/generated/decisions.json` by `scripts/generate-decisions.mjs` before every build and dev start |

`DECISIONS.md` stays the only place a decision is written. Add or change a decision there, keep
the `### D-nn · date · who · status` heading and bold summary line, and the board picks it up on the
next deploy. Decisions made with Chad or Tash are labelled "Decided with you".

The only hand-written parts are `NOTES` (what to look at on a page, and who should look) and
`QUESTIONS`. When a question is answered, record the answer in `DECISIONS.md` and remove it from
`QUESTIONS`. Never rename an item id once it has feedback: ticks and notes are stored against it.

## Setting it up (once)

### 1. Supabase (where ticks and notes are saved)

Create a free project at supabase.com, open the SQL editor and run:

```sql
create table review_feedback (
  id uuid primary key default gen_random_uuid(),
  item_id text not null,
  author text not null check (author in ('Tash', 'Chad', 'Ben')),
  kind text not null check (kind in ('approve', 'unapprove', 'note')),
  body text not null default '',
  created_at timestamptz not null default now()
);
create index review_feedback_item on review_feedback (item_id, created_at);

-- Only the server can read or write (it uses the service role key, which skips these rules).
alter table review_feedback enable row level security;
```

Rows are only ever added, never changed or deleted, so the table is also a record of who approved
what and when. Taking back an approval adds an `unapprove` row.

Then copy the Project URL, and from Project Settings → API Keys the **secret** key (`sb_secret_...`), or the legacy `service_role` key (`eyJ...`). Never the publishable or anon key: the check below will say so if it is.

### 2. Resend (the email to Ben)

Create a free account at resend.com and make an API key. Without a verified domain, Resend's test
sender (`onboarding@resend.dev`) can only send to the email address the Resend account was
created with, which is fine for notifications to Ben. To send from a Marzipan address instead,
verify the domain in Resend and set `REVIEW_FROM_EMAIL`, e.g. `Nolan review board <review@marzipan.com.au>`.

### 3. Vercel

In the Vercel project, Settings → Environment Variables, add these to every environment that serves
staging. Until launch that includes Vercel's **Production** environment, because `main` deploys
there and is staging until `SITE_ENV` is set to `production` (nolan-family-law.vercel.app). The
board and its API switch themselves off when `SITE_ENV=production`, so the variables can stay put
at launch.

| Name | Value |
|---|---|
| `SUPABASE_URL` | The Supabase Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | The `service_role` key (secret: never in the code or a `NEXT_PUBLIC_` variable) |
| `RESEND_API_KEY` | The Resend API key |
| `REVIEW_NOTIFY_EMAIL` | Where the emails go. Several addresses can be separated by commas |
| `REVIEW_FROM_EMAIL` | Optional, see above |

Redeploy, then open `/api/review?check=1` on staging. It checks both connections without saving
anything or sending an email, and says what is wrong if something is (never showing a key):

```json
{ "supabase": { "ok": true, "result": "table found and readable" }, "resend": { "ok": true, "result": "key valid" } }
```

Then open `/review/`, tick something and add a note to check the email arrives.

Also set `STAGING_USER` and `STAGING_PASSWORD` in the same environment, so staging (and the board)
asks for a password. The check reports `"stagingPasswordSet": false` until they are set.

## Testing locally

`REVIEW_STORE=memory npm run dev` keeps ticks and notes in memory (lost on restart), so the board
can be tried without Supabase.
