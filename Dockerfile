FROM oven/bun:latest AS base

# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# Production image, copy all the files and run the app
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["bun", "run", "build/index.js"]

