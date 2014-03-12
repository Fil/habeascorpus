from api.models import Topic, Document
from api.serializers import TopicSerializer, DocumentSerializer
from rest_framework import generics

class TopicList(generics.ListAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer

class DocumentList(generics.ListAPIView):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer