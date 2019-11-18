FROM node:10.15

WORKDIR /app
ADD . /app

# Install dependences
RUN npm install

# Build sources
RUN npm run build

RUN chmod +x docker/entrypoint.sh
CMD ["./docker/entrypoint.sh"]
