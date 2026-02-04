<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Comment;

class CommentSeeder extends Seeder
{
    
    public function run(): void
    {
        $articles = Article::all();

        foreach ($articles as $article) {
            Comment::factory()
                ->count(rand(3, 7))
                ->create([
                    'article_id' => $article->id,
                ]);
        }
    }
}
