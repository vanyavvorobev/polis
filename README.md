<div>

<h2>Проект запускается в Docker и использует:</h2>

<ul>
  <li>PHP 8.2 (php-fpm)</li>
  <li>Nginx</li>
  <li>MySQL 8</li>
  <li>Laravel</li>
  <li>Vite</li>
</ul>

<h2>Требования</h2>

<p>На хост-машине должны быть установлены:</p>

<ul>
  <li>Docker</li>
  <li>Docker Compose</li>
  <li>Node.js + npm (для Vite)</li>
</ul>

<h2>Установка и запуск</h2>

<h3>1. Клонировать репозиторий</h3>
<pre><code>git clone https://github.com/vanyavvorobev/polis.git
cd polis</code></pre>

<h3>2. Скопировать .env</h3>
<pre><code>cp .env.example .env
Заменить в .env данные для доступа в БД:</code></pre>

<h3>3. Запустить Docker-контейнеры</h3>
<pre><code>docker-compose up -d</code></pre>

<h3>4. Установить зависимости PHP</h3>
<pre><code>docker exec -it laravel_app composer install</code></pre>

<h3>5. Сгенерировать ключ приложения (если не задан)</h3>
<pre><code>docker exec -it laravel_app php artisan key:generate</code></pre>

<h3>6. Создать таблицы для sessions и cache</h3>
<pre><code>docker exec -it laravel_app php artisan session:table
docker exec -it laravel_app php artisan cache:table</code></pre>

<h3>7. Выполнить миграции и сидеры</h3>
<pre><code>docker exec -it laravel_app php artisan migrate --seed</code></pre>

<h2>Frontend (Vite)</h2>

<p>Vite запускается на хост-машине, не в контейнере.</p>

<h3>1. Установка зависимостей</h3>
<pre><code>npm install</code></pre>

<h3>2. Запуск приложения</h3>
<pre><code>npm run dev</code></pre>

</div>
