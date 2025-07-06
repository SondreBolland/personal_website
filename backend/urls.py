from django.urls import path
from .views import *

urlpatterns = [
    path('message/', CreateMessageView.as_view()),
]