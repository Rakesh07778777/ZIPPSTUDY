

from django.urls import path
from .import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
   
    path('', views.Index, name='index'),
    path('Home/', views.Home, name='home'),
    path('base/', views.BASE, name='base'),
    path('Notes', views.NOTES_DETAILS, name='notes_details'),
    path('Dashboard', views.DASHBOARD, name='dashboard'),
    path('Login', views.LOGIN, name='login'),
    path('doLogin', views.doLogin, name='doLogin'),
    path('doLogout', views.doLogout, name='logout'),
    path('usersignup/', views.USERSIGNUP, name='usersignup'),
    path('Profile', views.PROFILE, name='profile'),
    path('Password', views.CHANGE_PASSWORD, name='change_password'),
    path('AddNotes', views.ADD_NOTES, name='add_notes'),
    path('ManageNotes', views.MANAGE_NOTES, name='manage_notes'),
    path('DeleteNOTES/<str:id>', views.DELETE_NOTES, name='delete_notes'),
    path('ViewNotes/<str:id>', views.VIEW_NOTES, name='view_notes'),
    path('EditNotes', views.EDIT_NOTES, name='edit_notes'),
    path('SearchNotes', views.SEARCH_NOTES, name='search_notes'),
    path('About/', views.about, name='about'),
    path('Home/About/', views.home_about, name='home-about'),
    path('Home/Notes', views.HOME_NOTES_DETAILS, name='home_notes_details'),
    
    
   
]+static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
