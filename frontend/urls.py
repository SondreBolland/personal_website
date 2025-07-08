from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index, name=''),
    path('publications', index),
    path('projects', index),
    path('learning', index),
    path('message', index),
]