# SmartFit AI v1.3 — bundled MediaPipe

This version removes the runtime import from jsDelivr. MediaPipe JavaScript is bundled by Vite; its WASM and pose model are served from your own Netlify site. Camera opens only after AI is ready.

## Deployment (important)
This is a **source project**, not a prebuilt drag-and-drop website. The build requires npm and downloads the pose model during build. **Do not drag this source folder directly to Netlify Drop.**

1. Upload this project folder to a GitHub repository (files should be in the repository root).
2. In Netlify, choose **Add new project → Import an existing project → GitHub** and select that repository.
3. Netlify detects `netlify.toml`, runs `npm run build`, and publishes `dist`.
4. Open the resulting HTTPS URL in Chrome on your phone. Allow camera permission.
5. To update your existing Netlify site, connect its project to the Git repository under its build/deploy settings, rather than creating a separate site.

Local build: `npm install && npm run build`. To preview locally, `npm run dev` (phone testing requires HTTPS; localhost on a computer is okay).

If Netlify build cannot reach Google's model hosting, the build will fail with an explicit model download error. In that case, download `pose_landmarker_lite.task` from the model URL in `scripts/prepare-assets.mjs`, commit it under `public/models/`, and remove the fetch/write block from the script.

Note: The model and WASM files are fetched by the browser from the **same Netlify domain**, not from jsDelivr. A first online load is required. Test repetition thresholds with real students before classroom use.
