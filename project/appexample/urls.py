from django.urls import path
<<<<<<< Updated upstream
from .views import placeholder
=======
from . import views
from .views import UserView, ListUserView, CreateUserView, ImageView, ListImageView, ImageUploadView, upload_images
>>>>>>> Stashed changes

urlpatterns = [
<<<<<<< Updated upstream
    path('', placeholder)
]
=======
    path('user-view', UserView.as_view()),
    path('list-user-view', ListUserView.as_view()),
<<<<<<< Updated upstream
    path('user_create', CreateUserView.as_view()),
=======
    path('create-user', CreateUserView.as_view()),
    path('image-view', ImageView.as_view()),
    path('list-image-view', ListImageView.as_view()),
    #path('fetch-images', GetImagesView.as_view()),
    path('upload', ImageUploadView.as_view()),
    path('upload_images', upload_images, name="images"),
    path("", views.index, name="home"),
    # path('calculate', CalculateView.as_view()),
    # path('image', views.ImageView.as_view()),
>>>>>>> Stashed changes
]
>>>>>>> Stashed changes
