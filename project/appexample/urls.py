from django.urls import path
from .views import UserView, ListUserView, CreateUserView

urlpatterns = [
    path('user-view', UserView.as_view()),
    path('list-user-view', ListUserView.as_view()),
    path('create-user', CreateUserView.as_view()),
]