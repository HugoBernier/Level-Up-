# docker/Dockerfile

FROM php:8.3-cli

# System dependencies
RUN apt-get update && apt-get install -y \
    git curl unzip zip libpq-dev libonig-dev gnupg \
    && docker-php-ext-install pdo pdo_pgsql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Set workdir
WORKDIR /var/www/html

# Copy package files and install Node dependencies
COPY package*.json ./
RUN npm install

# Add node_modules/.bin to PATH
ENV PATH="./node_modules/.bin:$PATH"

# Copy the rest of the app
COPY . .
