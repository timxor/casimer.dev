#!/bin/bash

echo -e "\n\nStarting django backed server via start_backend_server.sh \n"

echo -e "\nCreating and activating Python virtual environment...\n"
python3 -m venv venv
source venv/bin/activate

echo -e "Installing dependencies from requirements.txt...\n"
pip install -r requirements.txt

echo -e "\n\nStarting Django development server...\n"
python3 manage.py runserver &

echo -e "Waiting for the server to start...\n"
sleep 5

echo -e "\n\nOpening Google Chrome at 127.0.0.1:8000...\n"
open -a "Google Chrome" http://127.0.0.1:8000/

echo -e "Server now running on 127.0.0.1:8000 \n\n"
