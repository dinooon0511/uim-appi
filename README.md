# UIM Appi

Монорепо: React (client) + Vercel serverless API (api/*) + Neon Postgres.

## Шаги локально
1) Скопируйте .env.example в .env и задайте DATABASE_URL (Neon)
2) cd client && npm i && npm run dev

## Деплой
- Подключите проект к Vercel
- Добавьте переменную DATABASE_URL
- Vercel сам подхватит функции из api/* и билд клиента из client

