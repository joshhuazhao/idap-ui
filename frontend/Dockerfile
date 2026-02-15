# Stage 0, "build-stage", based on Bun, to build and compile the frontend
FROM oven/bun:1 AS build-stage

WORKDIR /app

COPY package.json bun.lock /app/

<<<<<<< HEAD
RUN npm install -g pnpm
RUN pnpm install
=======
COPY frontend/package.json /app/frontend/
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d

WORKDIR /app/frontend

RUN bun install

<<<<<<< HEAD
RUN pnpm run build
=======
COPY ./frontend /app/frontend
ARG VITE_API_URL

RUN bun run build
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1

COPY --from=build-stage /app/frontend/dist/ /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
