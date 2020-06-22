# cryptomath

> Frontend for the CryptoMath project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Start application
Install latest version of production process manager [PM2](http://pm2.keymetrics.io/):
``` bash
npm install pm2@latest -g
```
Next, run commands:
```bash
npm run build
pm2 start npm --name "cryptomath" -- start
```
After that, process will run in the background. If you want to delete the app from the PM2 process list. You just have to enter the following command: `pm2 delete cryptomath`.

### Restart application without downtime
```bash
git reset --hard
git pull
npm run build
pm2 delete cryptomath
pm2 start npm --name "cryptomath" -- start
```

## NGINX configuration
Your [NGINX](https://www.nginx.com/) site configuration should look similar:
```bash
map $sent_http_content_type $expires {
    "text/html" epoch;
    "text/html; charset=utf-8" epoch;
    default off;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name cryptomath.xyz www.cryptomath.xyz;
    
    charset utf-8;

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    ssl_certificate <PATH_TO_CERT>/<FULLCHAIN_KEY_NAME>.crt;
    ssl_certificate_key <PATH_TO_CERT>/<PRIVATE_KEY_NAME>.key;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA:!3DES';
    ssl_prefer_server_ciphers on;
    ssl_dhparam <PATH_TO_NGINX>/<DH_KEY_NAME>.pem;

    location / {
        expires $expires;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_redirect off;
        proxy_read_timeout 1m;
        proxy_connect_timeout 1m;
        proxy_pass http://127.0.0.1:3000; # set the address of the Node.js
    }

    access_log <PATH_TO_NGINX_LOGS>/access.log;
    error_log  <PATH_TO_NGINX_LOGS>/error.log error;

    location ~ /\.(?!well-known).* {
        deny all;
    }
	
    # Redirect non-https traffic to https
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
}
```
