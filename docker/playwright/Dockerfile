FROM node:22.14

RUN apt-get update && apt-get install -y \
    nano \
    curl \
    zsh \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies for Playwright
RUN npx playwright install-deps

WORKDIR /var/www/e2e

COPY --chown=node:node . .
RUN mkdir /home/node/.cache
RUN chown -R node:node /home/node
RUN mkdir -p /var/www
RUN chown -R node:node /var/www

USER node

RUN export RUNZSH=yes && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
    sed -i 's/ZSH_THEME=".*"/ZSH_THEME="bira"/' ~/.zshrc && \
    sed -i 's|local user_host="%B%(!.%{$fg\[red\]%}.%{$fg\[green\]%})%n@%m%{$reset_color%} "|local user_host="%B%(!.%{$fg[blue]%}.%{$fg[blue]%})%n@%m%{$reset_color%} "|' ~/.oh-my-zsh/themes/bira.zsh-theme