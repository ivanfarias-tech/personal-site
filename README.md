# Ivan Farias --- Personal Site

Personal website and technical blog built with
[Astro](https://astro.build/).

The site focuses on infrastructure, cloud, automation, networking,
homelab experiments, technical notes, and practical guides.

## Technology

-   **Framework:** [Astro 7](https://astro.build/) with static output
-   **Content:** MDX + Astro Content Collections
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with
    CSS-first configuration
-   **Code blocks:** [Expressive Code](https://expressive-code.com/)
-   **Package manager:** [pnpm](https://pnpm.io/)
-   **Deployment:** Static hosting; portable across static hosting
    platforms, object-storage based hosting, and self-hosted
    environments
-   **Development environment:** Node.js + VS Code Dev Container

## Project structure

``` text
├── public/                  # Static assets, favicon, robots.txt
├── src/
│   ├── assets/              # Images processed by Astro
│   ├── components/          # Reusable UI components
│   ├── data/
│   │   └── blog/            # MDX posts
│   ├── layouts/             # Page and post layouts
│   ├── pages/               # Site routes and endpoints
│   ├── styles/              # Global and post typography
│   ├── utils/               # Site data and utilities
│   ├── content.config.ts    # Content collection schema
│   └── env.d.ts
├── astro.config.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── LICENSE
```

## Routes

  ---------------------------------------------------------------------------
  Path                    File                        Description
  ----------------------- --------------------------- -----------------------
  `/`                     `pages/index.astro`         Home

  `/posts`                `pages/posts/index.astro`   Blog index, grouped by
                                                      year

  `/posts/[id]`           `pages/posts/[id].astro`    Individual posts

  `/contact`              `pages/contact.astro`       Contact information

  `/llms.txt`             `pages/llms.txt.ts`         Plain-text export of
                                                      blog content
  ---------------------------------------------------------------------------

Blog URLs use each post's collection **id**, based on the MDX filename
stem.

## Content

Posts are written in MDX and stored in:

``` text
src/data/blog/
```

The current post frontmatter supports:

``` yaml
title: ""
description: ""
pubDate: ""
draft: false
cover:
coverAlt: ""
```

`cover` and `coverAlt` are optional.

Set `draft: true` to exclude a post from the production build.

MDX supports regular Markdown syntax, fenced code blocks, and Astro/MDX
components when a post requires them.

## Styling

The project uses Tailwind CSS v4 with CSS-first configuration.

Theme tokens are defined in:

``` text
src/styles/index.css
```

The site uses semantic color tokens such as:

-   `bg-bg`
-   `bg-panel`
-   `text-ink`
-   `text-dim`
-   `text-accent`

The visual theme follows the user's operating-system light/dark
preference.

## Development

The recommended development environment uses the included VS Code Dev
Container.

The container is based on Node.js 22 and installs the project's pnpm
version.

### Local setup

Clone the repository:

``` bash
git clone https://github.com/ivanfarias-tech/personal-site.git
cd personal-site
```

Install dependencies:

``` bash
pnpm install
```

Start the development server:

``` bash
pnpm dev
```

The development server listens on port `4321`.

### VS Code Dev Container

The repository includes:

``` text
.devcontainer/
├── Dockerfile
└── devcontainer.json
```

Opening the project in a compatible VS Code environment allows the
project to run inside the development container without requiring the
project's Node.js/pnpm environment to be installed directly on the host.

## Scripts

Available package scripts include:

``` bash
pnpm dev       # Start the development server
pnpm start     # Start the production server/preview command
pnpm build     # Build the static site
pnpm preview   # Preview the generated site
pnpm format    # Format project files
```

The production build is generated in:

``` text
dist/
```

## Deployment

The site is configured for **static output**.

Running:

``` bash
pnpm build
```

generates the complete website under `dist/`.

Because the generated site is static, deployment is not tied to a
specific application runtime or cloud provider. The resulting files can
be served by static hosting platforms, object storage with static-site
delivery, or a self-hosted web server.

The production site is:

**https://www.ivanfarias.tech**

## Projects

Project information displayed on the home page is maintained locally in:

``` text
src/utils/data.ts
```

The project listing does not depend on an external pinned-repository
service. This keeps the site's project presentation under direct
repository control.

## Credits

This project started from [Astro
Portfolio](https://github.com/dreyfus92/astro-portfolio) by **Paul
Valladares** (`dreyfus92`).

The original project provided the initial Astro structure and visual
foundation. It is licensed under the MIT License.

This repository has been substantially adapted for a personal
infrastructure and cloud portfolio, including its content, project
model, visual identity, navigation, metadata, static architecture, and
deployment approach.

The original Git history has been preserved as part of the project's
development history and to maintain transparency regarding its origin.

## License

MIT License.

The original MIT license and copyright notice are retained in `LICENSE`,
including the copyright notice for Paul Valladares.
