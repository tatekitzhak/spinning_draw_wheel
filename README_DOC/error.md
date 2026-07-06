Navigated to https://18.223.255.165:4000/

console error:
vendor-tJYGX_wu.js:70 
 GET https://18.223.255.165/keycloak/protected 401 (Unauthorized)

index-BwQ2shQi.js:2 Failed to fetch data: AxiosError: Request failed with status code 401
    at zb (vendor-tJYGX_wu.js:70:1087)
    at XMLHttpRequest.D (vendor-tJYGX_wu.js:70:5927)

network:

{error: "Unauthorized", details: "Expected 200 OK from the JSON Web Key Set HTTP response",…}
details: "Expected 200 OK from the JSON Web Key Set HTTP response"
error: "Unauthorized"
message: "Invalid or unauthorized token"

header:
Request URL
https://18.223.255.165/keycloak/protected
Request Method
GET
Status Code
401 Unauthorized
Remote Address
18.223.255.165:443
Referrer Policy
strict-origin-when-cross-origin
access-control-allow-credentials
true
access-control-allow-origin
https://18.223.255.165:4000
connection
keep-alive
content-length
134
content-type
application/json; charset=utf-8
date
Fri, 03 Jul 2026 01:28:26 GMT
etag
W/"86-eJ/knSXlaikhmR278VuEGbgwLfM"
server
nginx
vary
Origin
x-powered-by
Express
accept
application/json, text/plain, */*
accept-encoding
gzip, deflate, br, zstd
accept-language
en-US,en;q=0.9,he;q=0.8
authorization
Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJESW9LMmV2QmxDbEMwWng5NWpwUVdfb21CWDdBWi1PRDgzZnhoNjNBUFFFIn0.eyJleHAiOjE3ODMwNDI0MDIsImlhdCI6MTc4MzA0MjEwMiwiYXV0aF90aW1lIjoxNzgzMDQwMDU1LCJqdGkiOiI1MDM1ZGJjMi05N2Q4LTQ2ZmItODc4NS0wMjE2ZDgwZmM5N2MiLCJpc3MiOiJodHRwczovLzE4LjIyMy4yNTUuMTY1Ojg0NDMvcmVhbG1zL0hUVFBTX2xvY2FsaG9zdF9yZWFsbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzODc5NGQ5NS1kMTdlLTRlNDUtYmJhYy1iMzBjMzYxYzAxNzkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJodHRwc19sb2NhbGhvc3RfY2xpZW50X2lkIiwibm9uY2UiOiIzYTQzOTkyYS03OTlkLTRkNzItODQwYy1iN2U2N2RhOGYxZDAiLCJzZXNzaW9uX3N0YXRlIjoiMDZjZjZkY2YtODE2Ni00NjJiLTk5MzktYjYwNjM2YTIxYjQ2IiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovLzE4LjIyMy4yNTUuMTY1OjQwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1odHRwc19sb2NhbGhvc3RfcmVhbG0iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIwNmNmNmRjZi04MTY2LTQ2MmItOTkzOS1iNjA2MzZhMjFiNDYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJUYXRlayBZaXpoYWsiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJodHRwc191c2VyIiwiZ2l2ZW5fbmFtZSI6IlRhdGVrIiwiZmFtaWx5X25hbWUiOiJZaXpoYWsiLCJlbWFpbCI6Imh0dHBzQGh0dHBzLmNvbSJ9.XWMKQPWamqfiLUpOYEEk4DgVX5DX0Q8cyIKe2oLqHg3xwrJhe2MwdElyCno0c5syVl2Ier7ApNOL4X6j98hsDFWd-F2Si0I4XjywNSmUL-8Gf7tIQP8-sx1m0zdLMwPWMVeeD30hGuTaKIYXwEe04l_E2xBPe4kMjJpHj1E_lEYejXOLrC2iKqvDpOPSnxBKakPU1TC6Kp-1u1Ah_6uEQ1trZn-ejmkYFQBj4gDTko4ykxINz_KhpyR3Qebf3kdKUka0yM7DiBk7jbUDuoivRW0-a77ezIkl7pU01yyCq1JrpdnETyItOfukwTsWd32-7UkFaJ1XK7FDFgxO--DGww
connection
keep-alive
host
18.223.255.165
origin
https://18.223.255.165:4000
referer
https://18.223.255.165:4000/
sec-ch-ua
"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"
sec-ch-ua-mobile
?0
sec-ch-ua-platform
"macOS"
sec-fetch-dest
empty
sec-fetch-mode
cors
sec-fetch-site
same-site
user-agent
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36

Frontend react.js:

.env file:

VITE_API_BACKEND_ENDPOINT=18.223.255.165

VITE_KC_PORT=8443
VITE_REAL_NAME=HTTPS_localhost_realm

VITE_HTTPS_CLIENT_ID=https_localhost_client_id

docker-compose.yml file:

version: '3.9'

services:
  spindraw-kc:
    container_name: keycloak-spindraw
    build:
      context: .
      dockerfile: Dockerfile.frontend
    image: "kc-spindraw-nginx-img:v1.0"
    ports:
      - "4000:443"
    environment:
      DEPLOY_TYPE1: development
      DEPLOY_TYPE2: production
    
    env_file:
      - .env

nginx:
server {
        listen 80 default_server;
        listen [::]:80 default_server ipv6only=on;
        server_name _; # your-domain-or-ip
        
        # Redirect all traffic to HTTPS
        return 301 https://$host$request_uri;
    }

server {
	
	# SSL configuration

	listen 443 ssl default_server;
	listen [::]:443 ssl default_server ipv6only=on;
    server_name _;

    # ===== Start of certificate configuration ========
    ssl_certificate     /etc/nginx/ssl/prod/localhost.crt;
    ssl_certificate_key /etc/nginx/ssl/prod/localhost.key;

	# Configure the SSL session cache to improve performance.
    ssl_session_cache shared:SSL:1m;
    # Set the SSL session timeout period.
    ssl_session_timeout 5m;
    # Customize the TLS protocol types and cipher suites to use (the following is an example configuration; evaluate whether you need to configure it).
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    # Specify the allowed TLS protocol versions. Higher TLS versions provide better security for HTTPS communication, but have poorer browser compatibility than lower TLS versions.
    ssl_protocols TLSv1.2 TLSv1.3;
    # Prioritize the cipher suites specified by the server.
    ssl_prefer_server_ciphers on;
    # ======================= End of certificate configuration =======================


	# Self signed certs generated by the ssl-cert package
	# Don't use them in a production server!
	#
	# include snippets/snakeoil.conf;

    # Path to your application files
	root /var/www/html;
    # root /usr/share/nginx/html;  

	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file,
        # NGINX will look for a file matching the path defined by 
        # root directive plus the requested $uri (e.g., /var/www/html/index.html), 
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

    location /api {
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_http_version 1.1;
		proxy_set_header X-Forwarded-Host $host;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "Upgrade";
		proxy_set_header Host $host;
		proxy_pass http://backend/;
        #proxy_pass http://localhost:5000/;

        proxy_set_header X-NginX-Proxy true;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_pass_header Server;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
	}


	# redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

     #pass requests for dynamic content to rails/turbogears/zope, et al
    set $html_page "<!DOCTYPE html> <html> <body> <h1>Hello, This is healthcheck!</h1> <h2>This is an example Web App running on Docker and NGINX.</h2> Host: ${host}</p> <p>URL: ${request_uri}</p> <p>URI: ${uri}</p> <p>Remote Addr: ${remote_addr}</p></body> </html>"; 

    location /nginx_health {
      # proxy_pass      http://localhost:8000;
        default_type text/html;
        return 200 $html_page;
    }

    # Optional: To cache static assets (CSS, JS, images)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, must-revalidate";
    }
}

Dockerfile:
FROM ubuntu/nginx

EXPOSE 80 443
WORKDIR /app

COPY ./dist /var/www/html

RUN apt update -y && \
    apt install vim -y && \
    apt install -y iputils-ping

COPY ./nginx/config/default /etc/nginx/sites-available/
COPY ./nginx/config/nginx.conf /etc/nginx/

RUN mkdir -p /etc/nginx/ssl/prod
COPY ./nginx/certs/localhost.* /etc/nginx/ssl/prod/

react.js scripts:
export default function HomePage({ }: HomePageProps) {
    const [entries, setEntries] = useState<string[]>(INITIAL_ENTRIES);
    const [isSpinning, setIsSpinning] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);

    const { keycloak, authenticated } = useKeycloak();
    const [data, setData] = useState(null);

    const deploy_env = import.meta.env.VITE_DEPLOY_ENV;
    const API_BACKEND_ENDPOINT = import.meta.env.VITE_API_BACKEND_ENDPOINT;
    
    const fetchData = async () => {
        
        
        if (!keycloak?.token) {
            console.log("HomePage2:", keycloak)
            return
        };

        try {
            let API_URL_PREFIX = 'https';
            let port = '';

            if(deploy_env == 'development'){
                API_URL_PREFIX = 'http';
                port = ':'+3000;
            }
            const KEYCLOAK_PROTECTED_URL = `https://${API_BACKEND_ENDPOINT}/keycloak/protected`;

            console.log("HomePage keycloak:", keycloak)
            console.log("HomePage KEYCLOAK_PROTECTED_URL:", KEYCLOAK_PROTECTED_URL)

            // 1. Ensure token is fresh
            await keycloak.updateToken(30);

            // 2. Make the Axios request
            const response = await axios.get( KEYCLOAK_PROTECTED_URL, {
                headers: {
                    Authorization: `Bearer ${keycloak.token}`,
                    'Content-Type': 'application/json',
                },
            });

            setData(response.data);
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const handleSpin = () => {
        if (entries.length < 2 || isSpinning) return;
        setWinner(null);
        setIsSpinning(true);
    };

    const handleWinner = (name: string) => {
        setWinner(name);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
        });
    };

    const removeWinner = () => {
        setEntries(entries.filter(e => e !== winner));
        setWinner(null);
    };

    return (
        <>
            <div className="min-h-screen bg-[#FDFCFB] text-gray-900 font-sans selection:bg-black selection:text-white">
                <div>
                    <h1>Welcome to the Home Page!!</h1>
                    {authenticated ? (
                        <div>
                            <p>Hello, {keycloak?.tokenParsed?.preferred_username}!</p>

                            <button onClick={fetchData} className=" py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors  items-center justify-center gap-2">
                                Fetch Protected Data
                            </button>

                            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                        </div>
                    ) : (
                        <p>Please log in to access your personalized content.</p>
                    )}


                    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Wheel Section */}
                            <div className="lg:col-span-7 flex flex-col items-center gap-8">

                                <div className="relative w-full">
                                    <Wheel
                                        entries={entries}
                                        onWinner={handleWinner}
                                        isSpinning={isSpinning}
                                        setIsSpinning={setIsSpinning}
                                    />
                                </div>

                                <button
                                    onClick={handleSpin}
                                    disabled={isSpinning || entries.length < 2}
                                    className={`group relative px-12 py-5 rounded-full text-2xl font-black uppercase tracking-widest transition-all
                                                    ${isSpinning || entries.length < 2
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : 'bg-black text-white hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)]'
                                                    } 
                                                `}
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        {isSpinning ? 'Spinning...' : 'Spin Now'}
                                    </span>
                                </button>

                                {entries.length < 2 && !isSpinning && (
                                    <p className="text-sm text-red-500 font-medium animate-pulse">
                                        Add at least 2 entries to spin!
                                    </p>
                                )}
                            </div>

                            {/* Sidebar Section */}
                            <div className="lg:col-span-5 h-[600px] sticky top-28">
                                <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 h-full flex flex-col">
                                    <EntryList
                                        entries={entries}
                                        setEntries={setEntries}
                                        isSpinning={isSpinning}
                                    />
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Footer Info */}
                    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 mt-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
                            <div className="flex items-center gap-2 text-sm">
                                <Info size={16} />
                                <span>SpinDraw — The ultimate random picker</span>
                            </div>
                            <p className="text-sm">© 2026 SpinDraw Interactive</p>
                        </div>
                    </footer>

                    {/* Winner Modal */}
                    <AnimatePresence>
                        {winner && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                    onClick={() => setWinner(null)}
                                />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                    className="relative bg-white rounded-[3rem] p-12 max-w-md w-full text-center shadow-2xl overflow-hidden"
                                >
                                    {/* Decorative background element */}
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400" />

                                    <div className="mb-6 inline-flex p-4 bg-yellow-100 rounded-full text-yellow-600">
                                        <Trophy size={48} />
                                    </div>

                                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                                        We have a winner!
                                    </h2>

                                    <div className="text-5xl font-black mb-8 break-words leading-tight">
                                        {winner}
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                            onClick={() => setWinner(null)}
                                            className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={removeWinner}
                                            className="w-full py-4 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <X size={18} />
                                            Remove from list
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </>
    );
}


import React, { createContext, useRef, useEffect, useState, useMemo } from 'react';
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

interface KeycloakContextState {
  keycloak: Keycloak | null;
  authenticated: boolean;
  isInitialized: boolean;
}

const KeycloakContext = createContext<KeycloakContextState | undefined>(undefined);

interface KeycloakProviderProps {
  children?: React.ReactNode;
}

const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  const isInitialized = useRef(false);

  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BACKEND_ENDPOINT = import.meta.env.VITE_API_BACKEND_ENDPOINT;
    const KC_PORT = import.meta.env.VITE_KC_PORT;
    const keycloakClientId = import.meta.env.VITE_HTTPS_CLIENT_ID;

    const KEYCLOAK_URL = `https://${API_BACKEND_ENDPOINT}:${KC_PORT}/`;

    console.log("Keycloak ClientId:", keycloakClientId)
    console.log("KEYCLOAK_URL:", KEYCLOAK_URL)
    console.log("KeycloakProvider1:", isInitialized)
    // Prevent double-init in React Strict Mode
    if (isInitialized.current) {
      console.log("KeycloakProvider2:", isInitialized)
      return;
    }
    isInitialized.current = true;

   

    const KeycloakParams: KeycloakConfig = {
      url: KEYCLOAK_URL,
      realm: `${import.meta.env.VITE_REAL_NAME}`,
      clientId: keycloakClientId,
      // url: 'https://3.135.226.230:8443/',
      // realm: 'ec2realm1',
      // clientId: 'ec2_public_client_webapp_id',
    };

    const initOptions: KeycloakInitOptions = {
      // onLoad: 'check-sso', // Tries to see if a session exists in the background. If it fails to find the server, it can still cause a hang or a redirect loop if not handled correctly.
      // onLoad: 'login-required',  //Forces a redirect to the Keycloak login page immediately if the user isn't authenticated.
      onLoad: undefined, // Don't force a check on page load or use 'check-sso' but wrap it in a try/catch
      pkceMethod: 'S256',
      checkLoginIframe: false,
    };

    const keycloakInstance = new Keycloak(KeycloakParams);

    const initKeycloak = async () => {
      try {
        const auth = await keycloakInstance.init(initOptions);
        setKeycloak(keycloakInstance);
        setAuthenticated(auth);
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  // Memoize the value to optimize performance
  const contextValue = useMemo(() => ({
    keycloak,
    authenticated,
    isInitialized: !loading
  }), [keycloak, authenticated, loading]);

  return (
    <KeycloakContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export { KeycloakProvider, KeycloakContext }



Node.js kc_expressjs_app:
services:
  mongo:
    image: mongo:6.0.13
    container_name: mongo_database
    environment:
      MONGO_INITDB_DATABASE: ${MONGO_DATABASE}
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
    networks:
      - nodejs-mongodb-network
    restart: always
    volumes:
      # - mongo-config:/data/configdb
      - mongo-data:/data/db
    ports:
      - "27017:27017"
      # - "27018:27017" # Host Port : Container Port

  mongo-express:    
    image: mongo-express
    container_name: mongo_express_web_ui
    restart: always
    networks:
      - nodejs-mongodb-network
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: ${MONGO_USERNAME}
      ME_CONFIG_MONGODB_ADMINPASSWORD: ${MONGO_PASSWORD}
      ME_CONFIG_BASICAUTH_USERNAME: ${ME_USERNAME}
      ME_CONFIG_BASICAUTH_PASSWORD: ${ME_PASSWORD}
      ME_CONFIG_MONGODB_SERVER: "mongo"
      ME_CONFIG_SITE_BASEURL: "/mongo-express/"
      ME_CONFIG_SITE_SUBPATH: "/mongo-express/"

  nodejs-app: # This is the Service Name
    container_name: expressjs_web_app # This is the Actual Container Name
    build:
      context: .
      dockerfile: Dockerfile.nodejs
    image: "expressjs_web_app_img"
    # command: ["./wait-for-it.sh","--", "sh", "change_admin_passwd.sh"]
    # command: "npm start"

    ## Security
    # By default, Docker containers run as the root user (the superuser). This line overrides that default, instructing Docker to use a specific user account defined in your environment variables.
    # Running as root is a significant security risk. If a hacker exploits a vulnerability in your Node.js application (like a remote code execution bug), they would immediately have root access to the container. 
    # From there, it is much easier to "break out" of the container and attack your host machine.
    ##
    # user: ${NODE_USER}
    environment:
      # - NODE_ENV=production
      - PORT=3000
      - DATABASE_URL=mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongo:27017/${DB_NAME}?authSource=admin
    restart: always
    extra_hosts:
    - "localhost:host-gateway"
    networks:
      - nodejs-mongodb-network
    ports:
      - "3000:3000"
    env_file:
      - .env
    volumes:
      - ./:/home/node/app
    depends_on:
      - mongo
    
    # healthcheck:
    #   test: ["CMD", "curl", "-f", "<http://localhost:4000/health>"]
    #   interval: 30s
    #   timeout: 10s
    #   retries: 5

  nginx-nodejs-app:
    container_name: nginx_web_app
    build:
      context: .
      dockerfile: Dockerfile.nginx
    image: "nginx_web_app_img"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/config/nginx.conf:/etc/nginx/nginx.conf:ro
      # - ./static:/var/www/html
      # - conf:/etc/nginx/conf.d
      # - vhost:/etc/nginx/vhost.d
      # - html:/usr/share/nginx/html
      # - dhparam:/etc/nginx/dhparam
      # - certs:/etc/nginx/certs:ro
      # - /var/run/docker.sock:/tmp/docker.sock:ro
   
    restart: always
    depends_on:
      - nodejs-app
      - mongo-express
    networks:
      - nodejs-mongodb-network

networks:
  nodejs-mongodb-network:
    driver: bridge

volumes:
  mongo-config:
  mongo-data:

  Dockerfile.nginx:

FROM ubuntu/nginx

EXPOSE 80 443

RUN apt update -y && \
    apt install vim -y && \
    apt install -y iputils-ping

COPY ./nginx/config/default.conf /etc/nginx/sites-available/
COPY ./nginx/config/nginx.conf /etc/nginx/

RUN rm /etc/nginx/sites-enabled/default
RUN ln -sf /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default

RUN chown -R www-data:www-data /var/log/nginx

# SSL
RUN mkdir -p /etc/nginx/ssl/prod

COPY ./nginx/certs/localhost* /etc/nginx/ssl/prod/

Dockerfile.nodejs:
FROM node:20-slim

WORKDIR /usr/src/app

COPY ./build ./build
COPY ./node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

CMD ["node", "build/index.js"]


default.conf:

server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name localhost; 
    
    # Redirects the user to the exact same URL but using https://
    return 301 https://$host$request_uri;
}

# HTTP server block (port 80) to redirect to HTTPS (port 443)

server {
	
	# SSL configuration
	listen 443 ssl default_server;
	listen [::]:443 ssl default_server;
    server_name localhost;

    # === Start of certificate configuration ====
 
    ssl_certificate     /etc/nginx/ssl/prod/localhost.crt;
    ssl_certificate_key /etc/nginx/ssl/prod/localhost.key;

	# Configure the SSL session cache to improve performance.
    ssl_session_cache shared:SSL:1m;
    # Set the SSL session timeout period.
    ssl_session_timeout 5m;
    # Customize the TLS protocol types and cipher suites to use (the following is an example configuration; evaluate whether you need to configure it).
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    # Specify the allowed TLS protocol versions. Higher TLS versions provide better security for HTTPS communication, but have poorer browser compatibility than lower TLS versions.
    ssl_protocols TLSv1.2 TLSv1.3;
    # Prioritize the cipher suites specified by the server.
    ssl_prefer_server_ciphers on;
    # ======================= End of certificate configuration =======================


	# Self signed certs generated by the ssl-cert package
	# Don't use them in a production server!
	#
	# include snippets/snakeoil.conf;

   
   location / {
        proxy_pass http://nodejs_backend; # Changed from https to http
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

      
      location ^~ /mongo-express/ {
        resolver 127.0.0.11 valid=30s;
        set $mongo_express http://mongo-express:8081; 
        
        # Pass the full original URI (including /mongo-express/) straight to the backend
        proxy_pass $mongo_express; 
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
        

	# redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

     #pass requests for dynamic content to rails/turbogears/zope, et al
    set $html_page "<!DOCTYPE html> <html> <body> <h1>Hello, This is healthcheck!</h1> <h2>This is an example Web App running on Docker and NGINX.</h2> </body> </html>";

    location /nginx_health {
     
        default_type text/html;
        return 200 $html_page;
    }

    # Optional: To cache static assets (CSS, JS, images)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, must-revalidate";
    }
}

nginx.conf:

user www-data;
worker_processes auto;
worker_cpu_affinity auto;
# daemon off;
pid /run/nginx.pid;
error_log /var/log/nginx/error.log;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 1024;
}

http {

        ##
        # Basic Settings
        ##

        sendfile on;
        tcp_nopush on;
        types_hash_max_size 2048;

        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # SSL Settings
        ##

        ssl_protocols TLSv1.2 TLSv1.3; # Dropping SSLv3 (POODLE), TLS 1.0, 1.1
        ssl_prefer_server_ciphers off; # Don't force server cipher order.

        # Logging Settings

        access_log /var/log/nginx/access.log;

        ##
        # Gzip Settings
        ##

        gzip on;

        # gzip_vary on;
        # gzip_proxied any;
        # gzip_comp_level 6;
        # gzip_buffers 16 8k;
        # gzip_http_version 1.1;
        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    
        # basic sanity checks - hide the Nginx version
     
        server_tokens           off; 

        resolver 127.0.0.11 valid=30s;

        map $host $domain_name {
            default "example.com";    
        }

        upstream nodejs_backend {
            server nodejs-app:3000;
        }

        
        upstream mongo_express_ui {
            server mongo-express:8081;
        }

        # upstream frontend {
        #     least_conn;
        #     server localhost:4000;
        # }


        ##
        # Virtual Host Configs
        ##

        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}


// ONLY FOR LOCAL DEVELOPMENT
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import express, { Application, Request, Response, NextFunction, type Router } from 'express';
import { SignJWT, jwtVerify, JWTPayload, generateSecret, createRemoteJWKSet } from "jose";
import { getUrlQueryParametersForClient } from "../middleware/handleUrlQueryParametersForClient.js";

import 'dotenv/config';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { keycloakConfig } from '../config/auth.config.js'

export const keycloakRouter: Router = express.Router()


const JWKS = createRemoteJWKSet(new URL( keycloakConfig.KC_JWKS_URL as string));

async function authMiddleware(req: Request, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization;

  console.log('** authMiddleware *** 1:', req.headers, authHeader)

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('*** Authorization token required ***');
  }
  const token = authHeader.split(' ')[1];

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      
      issuer: keycloakConfig.KC_ISSUER as string,
      audience: 'account',
      clockTolerance: '5s',
      algorithms: ['RS256'],
    });

    console.log('payload:', payload)
    req.user = payload; 

    next();

  } catch (error: any) {
    console.error("JWT Verification failed details:", error);
    return res.status(401).json({ 
        error: 'Unauthorized', 
        details: error.message,
        message: 'Invalid or unauthorized token'
    });
    
  }
}
keycloakRouter.get("/protected", authMiddleware, (req: Request, res: Response, next: NextFunction) => {
  const userPayload = req.user as JWTPayload;
  const email = req.user;

  try {
   
    // const filePath = path.join(__dirname, 'data', 'users.json');
    // const filePath = path.join(process.cwd(), 'src/routes/data/users.json');
    // const rawData = fs.readFileSync(filePath, 'utf-8');

    // const parsedData = JSON.parse(rawData);
    // console.log("parsedData:",parsedData)

    // const usersInfo: UserInfo[] = parsedData;

    res.json({
      message: 'Welcome to the protected route!',
      // user: usersInfo,
      // users_info: usersInfo, 
      keycloak_info: userPayload,
      fetch_from_database: user_data[userPayload.email as keyof typeof user_data] || "No data for this user"
    });
  } catch (error) {
    console.log('error:', error)
    res.status(500).json({ message: "Error parsing user data", error });
  }
});