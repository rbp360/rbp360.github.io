# RBP360 Landing Page

This is a minimal landing page for RBP360 to list and link to small web apps. The site is intentionally lightweight and easy to extend.

Included files:
- `index.html` — landing page
- `assets/styles.css` — styles
- `assets/scripts.js` — small interactive JS (mobile nav + local subscribe)

How to use
1. Add these files to the repository root (index.html) and `assets/` directory.
2. Push to the repository and enable GitHub Pages:
   - Settings → Pages → Choose branch (typically `main`) and root (`/`), save.
3. Visit `https://rbp360.github.io/` (it may take a few minutes for Pages to publish).

Extending
- Add apps as subdirectories (`/apps/my-app/index.html`) and update the cards in the `#apps` section to link to them.
- Replace the subscribe behavior with a serverless function or a mailing-service integration when you want real notifications.
- Swap SVG and images with your own logos or screenshots.

License
- Feel free to use and adapt this starter UI for RBP360.