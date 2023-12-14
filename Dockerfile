FROM node:18-slim

RUN mkdir src

RUN apt-get update \
    && apt-get install -y \
    git \
    vim