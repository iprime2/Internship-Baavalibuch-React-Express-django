import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from nltk import ngrams

@csrf_exempt
def ngram_comparison(request):
    if request.method == 'POST':
        try:
            body = json.loads(request.body)
            text1 = body.get('text1', '')
            text2 = body.get('text2', '')

            ngram_size = 2  # Define the desired ngram size here

            ngrams1 = list(ngrams(text1.split(), ngram_size))
            ngrams2 = list(ngrams(text2.split(), ngram_size))

            print("Hello")

            comparison = {
                'text1_ngrams': ngrams1,
                'text2_ngrams': ngrams2
            }

            return JsonResponse(comparison)
        except Exception as e:
            return JsonResponse({'error': 'An error occurred during ngram comparison.', e:e})
    else:
        return JsonResponse({'error': 'Invalid request method'})
