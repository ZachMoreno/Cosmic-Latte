FROM ubuntu:xenial
RUN apt-get update \
    && apt-get install -y \
        nodejs \
        npm \
    && rm -rf /var/lib/apt/lists/*
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
VOLUME ["/app"]
ADD . /app
RUN cd app && npm install
EXPOSE 9191
WORKDIR /app
CMD ["npm", "start"]
