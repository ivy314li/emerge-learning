from django.contrib import admin
from .models import Question, Category, Student, QuestionUserData, Answer, Tag

# Register your models here.


class AnswerInline(admin.StackedInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Category)
admin.site.register(Student)
admin.site.register(QuestionUserData)
admin.site.register(Tag)