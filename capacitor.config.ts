import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.sri.aivoice",
  appName: "sri",
  // Not really used at runtime since server.url below points the WebView at
  // your live deployment, but Capacitor still wants a webDir to exist.
  webDir: "dist/client",
  server: {
    // TODO: replace this with your actual deployed URL, e.g.
    // "https://my-ai-voice.vercel.app". The Android app is a WebView shell
    // that loads this URL, so chat/tts keep working exactly as on the web.
    url: "https://REPLACE-WITH-YOUR-DEPLOYED-URL.example.com",
    cleartext: false,
  },
};

export default config;
