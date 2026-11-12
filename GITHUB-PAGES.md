# Publish SmartFit AI on GitHub Pages

1. Create a **public** GitHub repository named `smartfit-ai` (or any name).
2. Upload **the contents of this folder** to the repository root (not the folder itself). Include the hidden `.github/workflows/deploy.yml` file. For hidden folders, using Git on your computer is easiest.
3. Under repository **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
4. Push to the `main` branch. Open **Actions** to watch the workflow.
5. Once deployed, visit `https://YOUR_USERNAME.github.io/YOUR_REPO/` on your phone and allow camera access.

The build downloads the pose model from Google's storage and copies MediaPipe WASM files locally. If the build cannot download the model, review the Actions log. The live site does not use jsDelivr for MediaPipe.

GitHub Pages requires an eligible repository and available Actions quota; for typical public repositories this is generally free. Avoid storing student data or videos in the public repository.
