from django.urls import path
from . import views
from .views import UserView, ListUserView, CreateUserView, ImageView, ListImageView, CalculateView, ImageUploadView

urlpatterns = [
    path('user-view', UserView.as_view()),
    path('list-user-view', ListUserView.as_view()),
    path('create-user', CreateUserView.as_view()),
    path('image-view', ImageView.as_view()),
    path('list-image-view', ListImageView.as_view()),
    path('calculate', CalculateView.as_view()),
    path('upload', ImageUploadView.as_view()),
    # path('image', views.ImageView.as_view()),
]
