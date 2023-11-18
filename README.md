# casimer.dev

github - casimer.dev - repo
https://github.com/timxor/casimer.dev

heroku - casimer-dev-app - app
https://dashboard.heroku.com/apps/casimer-dev-app/deploy/heroku-git

cloudflare - casimer.dev - dns
https://dash.cloudflare.com/edb8f15640d1c39f5dbffa9abeb05ecf/casimer.dev

linkedin learning - building reach and django apps
https://www.linkedin.com/learning/building-react-and-django-apps/serving-react-code-through-django-s-static-files?u=58684281



https://learning.oreilly.com/library/view/full-stack-django/9781803242972/B18221_06.xhtml#_idParaDest-125




## search engine design
-backend
  - django app
- frontend
  - react app
    - components
      - Search
      - SearchResults
      - List
      - Details




cd /Users/tim/code/casimer.dev
cd backend
cd search_engine
python3 -m venv venv
source venv/bin/activate
pip install django
python manage.py runserver
http://127.0.0.1:8000/




cd frontend
cd search_engine
yarn start
http://localhost:3000






- django apps
  - create a new app
    - python3 manage.py startapp my_app_name
    - 



- create a new app
  - run command python3 manage.py startapp search_api
    - add the app to our main project
      - edit search_engine/settings.py
        - section INSTALLED_APPS
          - append search_api
    - run the server
      - python3 manage.py runserver



- book
  - django 4 for the impatient
  - full stack django and react


- managing django urls
  - search_engine/urls.py
    - localhost:8000/hello
    - localhost:8000/admin
    - http://127.0.0.1:8000/admin
    - http://localhost:8000/admin/login/?next=/admin/


- creating a custom path for a home page
  - edit urls.py
    - add import
      - from search_api import views as searchApiViews
    - add url pattern
      - path('', searchApiViews.home),
    - add import to search_api/views.py
      - from django.http import HttpResponse
    - add def home to search_api/views.py
      - def home(request)
        - return HttpResponse('<h1>Welcome to Home Page</h1>')
  - now go to
    - http://localhost:8000/
      - you see the home page



- search page
  - http://localhost:8000/search/
  - edit search_api/urls.py and 
  - search_api/views.py







- adding react router
  - yarn add react-router-dom@6
  - add import to src/index.js
    - import { BrowserRouter } from "react-router-dom";


- adding react bootstrap
  - yarn add react-bootstrap bootstrap
    - add import to index.js
      - import 'bootstrap/dist/css/bootstrap.min.css';


- creating the home page
  - create /pages/Home.jsx
  - add new page to App.js
    - import Home from "./pages/Home";
  - yarn start
  - http://localhost:3000/




pip3 install Django==4.0
python3 -m django
python3 -m django --version
django-admin --version


python3 -m django startproject search_engine
cd search_engine
python3 manage.py runserver
http://127.0.0.1:8000/



cd /Users/tim/code/casimer.dev/building-react-and-django-apps/01_01_end
virtualenv --python=python3 env
source env/bin/activate
pip install -r requirements.txt
cd demo && python manage.py runserver




- django components
  - ViewSet PublicPackageViewSet
    - read scope
    - queryset 
    - https://www.linkedin.com/learning/building-react-and-django-apps/displaying-a-list-of-items-with-react?autoSkip=true&resume=false&u=58684281




- displaying a list of items with react
  - https://www.linkedin.com/learning/building-react-and-django-apps/displaying-a-list-of-items-with-react?autoSkip=true&resume=false&u=58684281
  - ServiceApi.js
    - retrieveList()
      - Axios.get('/api/v1/public/packages/')






pagination with django
https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?resume=false&u=58684281

pagination with react
https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?resume=false&u=58684281

filtering with django
https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?resume=false&u=58684281

filtering with react
https://www.linkedin.com/learning/building-react-and-django-apps/pagination-with-django?resume=false&u=58684281





## forms with react and django

03_01
creating rest api service class with react and axios
https://www.linkedin.com/learning/building-react-and-django-apps/handling-creating-models-with-django-rest-framework?resume=false&u=58684281


creating a basic form as a react component
https://www.linkedin.com/learning/building-react-and-django-apps/creating-a-rest-api-service-class-with-react-and-axios?resume=false&u=58684281


creating form fields for basic form

connecting a react component to a service


















