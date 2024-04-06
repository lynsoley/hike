FROM docker.io/bitnami/nginx:1.25

# set environment variables
ENV NGINX_HTTP_PORT_NUMBER=5000

COPY ./css /app/css
COPY ./js /app/js
COPY ./index.html /app/index.html
COPY ./autumn.html /app/autumn.html
COPY ./spring.html /app/spring.html
COPY ./summer.html /app/summer.html
COPY ./winter.html /app/winter.html
COPY ./details.html /app/details.html
COPY ./resources /app/resources
COPY ./impressum.html /impressum.html