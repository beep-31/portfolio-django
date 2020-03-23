
from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('designx', views.designx, name = 'designx'),
    path('landing', views.landing, name = 'landing'),
    path('mercury', views.mercury, name = 'mercury')
]
