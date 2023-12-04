# Utilisez une image Node.js comme point de départ
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez les fichiers de l'application dans le conteneur
COPY . .

# Construisez l'application
RUN npm run build

# Exposez le port sur lequel l'application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
