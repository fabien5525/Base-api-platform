FROM composer:2.8.6 AS composer

FROM php:8.4-fpm

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libpq-dev \
    libicu-dev \
    nano \
    curl \
    zsh \
    && docker-php-ext-install pdo pdo_pgsql intl

# Ajoute www-data à ton UID local
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data
# Ajoute les droits sur /var/www
RUN chown -R www-data:www-data /var/www && \
    chmod -R 755 /var/www

USER www-data

RUN export RUNZSH=yes && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
    sed -i 's/ZSH_THEME=".*"/ZSH_THEME="bira"/' ~/.zshrc && \
    sed -i 's|local user_host="%B%(!.%{$fg\[red\]%}.%{$fg\[green\]%})%n@%m%{$reset_color%} "|local user_host="%B%(!.%{$fg[blue]%}.%{$fg[blue]%})%n@%m%{$reset_color%} "|' ~/.oh-my-zsh/themes/bira.zsh-theme

