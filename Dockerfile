FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    libpq-dev \
    curl git unzip \
 && docker-php-ext-install pdo pdo_pgsql pgsql \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
 && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get install -y nodejs \
 && apt-get clean && rm -rf /var/lib/apt/lists/*
