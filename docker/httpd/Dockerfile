FROM httpd:2.4

COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf
RUN mkdir /usr/local/apache2/sites-enabled
COPY conf/app.localhost.conf /usr/local/apache2/conf/sites-enabled/app.localhost.conf
COPY conf/api.app.localhost.conf /usr/local/apache2/conf/sites-enabled/api.app.localhost.conf

RUN usermod -u 1000 www-data

WORKDIR /var/www/html

EXPOSE 80
