# -------- BUILD STAGE --------
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production


# -------- RUNTIME STAGE --------
FROM nginx:alpine

# SPA routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular 17+ miatt browser mappát kell másolni
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]