from django.shortcuts import render, redirect
from quiz.models import Student
from django.http import HttpResponse, JsonResponse


def index(request):
    if not request.user.is_authenticated:
        info = {}
        if request.GET.get('error'):
            info = {'error': request.GET.get('error')}
        return render(request, 'index.html', info)
    return render(request, 'dashboard.html')


def change_user_info(request):
    if request.method == 'POST':
        user = request.user
        student = Student.objects.get(user=user)
        if request.POST['name']:
            student.name = request.POST['name']
        if request.POST['location']:
            student.location = request.POST['location']
        if request.POST['description']:
            student.description = request.POST['description']
        if 'image' in request.FILES:
            student.image = request.FILES['image']
        student.save()
        return redirect('dashboard')
    else:
        return HttpResponse(status=405)
