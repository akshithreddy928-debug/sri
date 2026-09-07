# My AI Voice

i want to creat my ai voice assistant

## Development

You need Node.js (or Bun) — [install Node with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Environment variables

The chat and text-to-speech features call OpenAI directly. Set:

```sh
OPENAI_API_KEY=sk-...
```

## Building an Android APK

This project is wrapped for Android with [Capacitor](https://capacitorjs.com/) —
the Android app is a WebView shell that loads your deployed site (so chat and
voice keep working exactly like on the web).

**Step 1 (required either way):** open `capacitor.config.ts` and replace the
placeholder `server.url` with your real deployed URL
(e.g. `https://my-ai-voice.vercel.app`).

### Option A — build automatically in the cloud (no local setup)

Push this repo to GitHub. The included workflow at
`.github/workflows/build-android.yml` builds a debug APK on every push to
`main` (or click **Run workflow** on the Actions tab to trigger it manually).
When it finishes, open the workflow run and download the `sri-debug-apk`
artifact — that's your `.apk`, ready to install on a phone (Settings → allow
installs from this source, then open the file).

### Option B — build locally

Requires [Android Studio](https://developer.android.com/studio) / the
Android SDK installed on your machine.

```sh
npm i
npm run android:add    # generates the android/ folder (one-time)
npm run android:sync   # re-run this after editing capacitor.config.ts
```

Then either:
- Open it in Android Studio (`npm run android:open`) and use
  **Build → Build Bundle(s) / APK(s) → Build APK(s)**, or
- From the command line:
  ```sh
  cd android
  ./gradlew assembleDebug
  ```
  The APK lands at `android/app/build/outputs/apk/debug/app-debug.apk`.


