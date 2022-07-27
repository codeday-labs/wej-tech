from django.urls import path
from .views import placeholder

urlpatterns = [
<<<<<<< Updated upstream
    path('', placeholder)
]
=======
    path('user-view', UserView.as_view()),
    path('list-user-view', ListUserView.as_view()),
    path('user_create', CreateUserView.as_view()),
]
>>>>>>> Stashed changes
