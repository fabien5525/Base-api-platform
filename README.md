# APP

## Installation

Global : 
````bash
docker compose up -d --build
````

### API - Symfony
````Bash
cd api
cp public/.htaccess.dist public/.htaccess

tools/bash
# Then in the bash : 
composer install
````

### PWA - NextJS
````bash
cd pwa

tools/bash
# Then in the bash :
npm run generate:types
````