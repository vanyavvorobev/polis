Проект запускается в Docker и использует:

PHP 8.2 (php-fpm)
Nginx
MySQL 8
Laravel
Vite

Требования
На хост-машине должны быть установлены:
Docker
Docker Compose
Node.js + npm (для Vite)

Установка и запуск
1. Клонировать репозиторий
git clone https://github.com/vanyavvorobev/polis.git
cd polis

2. Скопировать .env
cp .env.example .env
Заменить в .env данные для доступа в БД:

3. Запустить Docker-контейнеры
docker-compose up -d

4. Установить зависимости PHP
docker exec -it laravel_app composer install

5. Сгенерировать ключ приложения (если не задан)
docker exec -it laravel_app php artisan key:generate

6. Создать таблицы для sessions и cache
docker exec -it laravel_app php artisan session:table
docker exec -it laravel_app php artisan cache:table

7. Выполнить миграции и сидеры
docker exec -it laravel_app php artisan migrate --seed

Frontend (Vite)
Vite запускается на хост-машине, не в контейнере.

1. Установка зависимостей
npm install

2. Запуск приложения
npm run dev