#!/bin/bash

echo -e "\n\nStarting React.js frontend server via start_frontend_server.sh \n"

echo -e "Installing dependencies from package.json...\n"
yarn install

echo -e "\n\nStarting React development server...\n"
yarn start

echo -e "Waiting for the server to start...\n"
sleep 5

echo -e "\n\nOpening Google Chrome at 127.0.0.1:3000...\n"
open -a "Google Chrome" http://127.0.0.1:3000

echo -e "Server now running on 127.0.0.1:3000/ \n\n"
