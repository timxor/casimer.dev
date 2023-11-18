from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse('<h1>Welcome to Home Page</h1>')

def search(request):
    return HttpResponse('<h1>Welcome to Search Page\n\nYour Search '
                        'Results:</h1>')

