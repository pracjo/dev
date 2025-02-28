FROM php:8.1-apache

COPY index.php /var/www/html/

EXPOSE 80


FROM php:cli
WORKDIR /app
COPY  a.php
CMD ["php","a.php"]