from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, UserReg, Notes

# Customizing the CustomUser admin
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'first_name', 'last_name', 'email', 'user_type', 'is_staff']
    list_filter = ['user_type', 'is_staff']
    search_fields = ['username', 'first_name', 'last_name', 'email']
    ordering = ['username']
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'profile_pic')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'user_type', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {'classes': ('wide',),
                'fields': ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', 'user_type', 'is_staff')}),
    )
    filter_horizontal = ('groups', 'user_permissions')

# Register the CustomUser model
admin.site.register(CustomUser, CustomUserAdmin)

# Register UserReg model
@admin.register(UserReg)
class UserRegAdmin(admin.ModelAdmin):
    list_display = ['admin', 'mobilenumber', 'regdate_at', 'updated_at']
    list_filter = ['regdate_at', 'updated_at']
    search_fields = ['admin__first_name', 'admin__last_name', 'mobilenumber']
    ordering = ['regdate_at']

# Register Notes model
@admin.register(Notes)
class NotesAdmin(admin.ModelAdmin):
    list_display = ['nsuser', 'notestitle', 'subject', 'created_at', 'updated_at']
    list_filter = ['subject', 'created_at', 'updated_at']
    search_fields = ['notestitle', 'subject']
    ordering = ['created_at']
