FROM php:8.3-cli

RUN apt-get update && apt-get install -y \
    git curl unzip zip libpq-dev libonig-dev nodejs npm \
    && docker-php-ext-install pdo pdo_pgsql

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer Node.js 20 (optionnel si nodejs déjà installé)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

WORKDIR /var/www/html
