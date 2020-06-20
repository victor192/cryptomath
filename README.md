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
    listen 80;
    listen [::]:80 ipv6only=on;
    listen 443 default_server ssl;
    server_name <YOUR_SITE_DOMAIN> www.<YOUR_SITE_DOMAIN>;
    
    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    ssl_certificate <PATH_TO_CERT>/<FULLCHAIN_KEY_NAME>.crt;
    ssl_certificate_key <PATH_TO_CERT>/<PRIVATE_KEY_NAME>.key;

    location / {
        expires $expires;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 1m;
        proxy_connect_timeout 1m;
        proxy_pass http://127.0.0.1:3000; # Must specify Nuxt.js port
    }

    # Redirect non-https traffic to https
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
}
```
