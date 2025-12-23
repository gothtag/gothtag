# GOTHTAG

Gothic-themed static site deployed on Netlify.

##  Live Site

Deployed at: **[Your Netlify URL]** (update after first deploy)

##  Quick Start

```bash
# Install dependencies
npm install

# Dev server
npm run dev

# Production build
npm run build
```

##  Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Express + Drizzle ORM
- **Deployment**: Netlify
- **Hosting**: GitHub (https://github.com/gothtag/gothtag)

##  Features

- Gothic aesthetic with custom fonts (Cinzel, Lora)
- Responsive design with mobile-first approach
- Custom cursor and visual effects (film grain, vignette)
- Static HTML pages: home, community, FAQ, socials, apply
- React SPA with routing
- Security headers configured

##  Structure

```
 client/          # React frontend
    src/
       components/
       pages/
       index.css
    public/
        _redirects  # SPA fallback
        _headers    # Security headers
 server/          # Express backend
 *.html           # Static landing pages
 netlify.toml     # Netlify config
 package.json
```

##  Netlify Configuration

**Build Settings** (already in netlify.toml):
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects: SPA fallback to `/index.html`
- Headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy

##  Troubleshooting

**PostCSS/CSS errors**: Check `client/src/index.css` for proper :root braces  
**Build fails**: Review Netlify build logs (Deploys  latest)  
**404 on routes**: Verify `_redirects` is in `dist` after build

##  Recent Fixes

-  Fixed CSS :root block formatting (commit cc61f01)
-  Fixed netlify.toml headers array syntax
-  Added security headers and SPA redirects

##  Links

- Repository: https://github.com/gothtag/gothtag
- Issues: https://github.com/gothtag/gothtag/issues

SSH: configured for 4po
