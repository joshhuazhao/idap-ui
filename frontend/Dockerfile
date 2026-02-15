# Stage 0, "build-stage", based on Bun, to build and compile the frontend
FROM oven/bun:1 AS build-stage

WORKDIR /app

COPY package.json bun.lock /app/

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
RUN npm install -g pnpm
RUN pnpm install
=======
=======
>>>>>>> eeb3a88 (update python version and others)
COPY frontend/package.json /app/frontend/
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d
=======
COPY frontend/package.json /app/frontend/
=======
COPY frontend/package.json /app/frontend/
>>>>>>> 524b2af (update python version and others)
=======
RUN npm install -g pnpm
RUN pnpm install
>>>>>>> 9cee647 (update python version and others)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bb43562 (update python version and others)
=======
>>>>>>> 524b2af (update python version and others)
=======
=======
<<<<<<< HEAD
RUN npm install -g pnpm
RUN pnpm install
=======
COPY frontend/package.json /app/frontend/
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d
=======
COPY frontend/package.json /app/frontend/
=======
RUN npm install -g pnpm
RUN pnpm install
>>>>>>> 9cee647 (update python version and others)
>>>>>>> bb43562 (update python version and others)
>>>>>>> 94e565c (update python version and others)
>>>>>>> eeb3a88 (update python version and others)

WORKDIR /app/frontend

RUN bun install

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> eeb3a88 (update python version and others)
<<<<<<< HEAD
RUN pnpm run build
=======
=======
>>>>>>> bb43562 (update python version and others)
<<<<<<< HEAD
=======
>>>>>>> 524b2af (update python version and others)
=======
>>>>>>> 94e565c (update python version and others)
>>>>>>> eeb3a88 (update python version and others)
COPY ./frontend /app/frontend
ARG VITE_API_URL

RUN bun run build
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d
=======
=======
>>>>>>> 524b2af (update python version and others)
=======
>>>>>>> eeb3a88 (update python version and others)
=======
RUN pnpm run build
>>>>>>> 9cee647 (update python version and others)
=======
<<<<<<< HEAD
>>>>>>> f6c2e534c3a04b123670119df7889ee73718235d
=======
=======
RUN pnpm run build
>>>>>>> 9cee647 (update python version and others)

>>>>>>> bb43562 (update python version and others)
>>>>>>> 94e565c (update python version and others)

<<<<<<< HEAD
>>>>>>> bb43562 (update python version and others)

=======
>>>>>>> 0e16d6d (update python version and others)
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1

COPY --from=build-stage /app/frontend/dist/ /usr/share/nginx/html

COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
