FROM node:22-bookworm

RUN npm install -g pnpm@11.26.0

USER node

RUN pnpm config set store-dir /pnpm-store
