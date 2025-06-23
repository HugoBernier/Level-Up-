FROM php:8.3-cli

# Dépendances système
RUN apt-get update && apt-get install -y \
    git curl unzip zip libpq-dev libonig-dev nodejs npm \
    && docker-php-ext-install pdo pdo_pgsql

# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installer Node.js (v20)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Définir un répertoire de travail
WORKDIR /var/www/html
