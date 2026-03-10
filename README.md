# mijioft

Monorepo with a React frontend and Django backend.

## Structure

- **frontend/** — React app (Vite)
- **backend/** — Django project

## Frontend (React)

```bash
cd frontend
npm install   # if not already done
npm run dev   # dev server (e.g. http://localhost:5173)
npm run build # production build
```

## Backend (Django)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
# source .venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver   # http://127.0.0.1:8000
```

Admin: http://127.0.0.1:8000/admin/ (create a superuser with `python manage.py createsuperuser`).
