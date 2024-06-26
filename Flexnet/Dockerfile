# Étape 1 : Builder l'application
FROM node:18.20.3 as build

WORKDIR /flexnet

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Utiliser un serveur web léger pour servir l'application
FROM nginx:alpine

COPY --from=build /flexnet/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]