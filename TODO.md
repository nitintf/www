# TODO

## Live status line

Built: the footer shows "12:24 pm in noida · 29° and clear · last commit 6d
ago to www". Time ticks on the client; weather (Open-Meteo) and the last
public push (GitHub events) are fetched on the server in `lib/status.ts` and
cached for 30 minutes. Any part that fails is left out.

- [ ] **Listening to.** Last.fm `user.getrecenttracks` (needs an API key and
      scrobbling from Spotify), or Spotify's currently-playing endpoint
      (needs an OAuth refresh token). Keep the secret in Vercel env vars, add
      it to `getStatus()`, and show it only when something played in the
      last ~15 minutes.

## Also pending

- [ ] Budly link in the work strip once it is live (it says "coming soon"
      for now).
- [ ] Add life events to the home timeline: where I was born and when,
      college years, moves, trips.
- [ ] Update the open graph images (`app/opengraph-image.tsx`,
      `app/twitter-image.tsx`) to the new look; they still use the old serif
      header.
- [ ] Add an `icon.svg` and `apple-icon.png` (only `favicon.ico` exists).
