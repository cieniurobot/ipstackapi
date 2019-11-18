FROM node:10.15
RUN apt-get update && apt-get install -y netcat

WORKDIR /app
ADD . /app

# Install dependences
RUN npm install

# Build sources
RUN npm run build

RUN chmod +x docker/entrypoint.sh
CMD ["./docker/entrypoint.sh"]
