# Usa una imagen base con Node.js
FROM node:latest

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

EXPOSE 4100

# Comando para iniciar el backend
CMD ["npm", "run", "start"]
