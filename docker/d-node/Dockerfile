FROM node:22.14

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /var/www/pwa

RUN apt-get update && apt-get install -y \
    git unzip zip nano curl zsh \
    && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER node

COPY --chown=node:node . .

RUN export RUNZSH=yes && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
    sed -i 's/ZSH_THEME=".*"/ZSH_THEME="bira"/' ~/.zshrc && \
    sed -i 's|local user_host="%B%(!.%{$fg\[red\]%}.%{$fg\[green\]%})%n@%m%{$reset_color%} "|local user_host="%B%(!.%{$fg[blue]%}.%{$fg[blue]%})%n@%m%{$reset_color%} "|' ~/.oh-my-zsh/themes/bira.zsh-theme

EXPOSE 80
ENV PORT=80

ENTRYPOINT ["/entrypoint.sh"]