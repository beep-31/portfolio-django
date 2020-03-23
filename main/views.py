from django.shortcuts import render
from .models import Contact
from datetime import datetime


# Create your views here.

def index(request):

	if request.method == 'POST':
		name = request.POST.get('name')
		email = request.POST.get('email')
		message = request.POST.get('message')
		new_contact = Contact(name = name, email = email, message = message, date = datetime.now())
		new_contact.save()
		
	
	return render(request, template_name = 'index.html')

def designx(request):
	#designx
	return render(request, template_name = 'designx/index.html')


def mercury(request):
	#mercury
	return render(request, template_name = 'mercury/index.html')


def landing(request):
	#landing
	return render(request, template_name = 'landing/index.html')

