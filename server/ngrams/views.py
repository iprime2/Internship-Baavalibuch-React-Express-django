import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from nltk import ngrams


@csrf_exempt
def ngram_comparison(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        text1 = body.get('text1', '')
        text2 = body.get('text2', '')

        ngram_size = 2  # Define the desired ngram size here

        ngrams1 = list(ngrams(text1.split(), ngram_size))
        ngrams2 = list(ngrams(text2.split(), ngram_size))

        comparison = {
            'text1_ngrams': ngrams1,
            'text2_ngrams': ngrams2
        }

        return JsonResponse(comparison)
    else:
        return JsonResponse({'error': 'Invalid request method'})
