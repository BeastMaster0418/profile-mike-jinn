"""
API views for backend.
"""
from datetime import date, datetime
from decimal import Decimal

from django.http import JsonResponse
from django.db import connection
from django.views.decorators.http import require_GET
from django.views.decorators.csrf import csrf_exempt


def _serialize(obj):
    """Convert DB types to JSON-serializable types."""
    if isinstance(obj, (datetime, date)):
        return obj.isoformat()
    if isinstance(obj, Decimal):
        return float(obj)
    if isinstance(obj, bytes):
        return obj.decode("utf-8", errors="replace")
    return obj


@require_GET
@csrf_exempt
def sections_list(request):
    """
    Return all rows from db_section table as JSON.
    Each row is a dict with column names as keys.
    """
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM db_section ORDER BY id")
            columns = [col[0] for col in cursor.description]
            rows = [
                {k: _serialize(v) for k, v in zip(columns, row)}
                for row in cursor.fetchall()
            ]
        return JsonResponse({"sections": rows})
    except Exception as e:
        return JsonResponse(
            {"error": str(e), "sections": []},
            status=500,
        )
