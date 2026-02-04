<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller 
{
    public function index() 
    { 
        $articles = Article::with('comments')->latest()->get();
        return ArticleResource::collection($articles);
    }

    public function show(Article $article) 
    {
        $article->load('comments');
        return new ArticleResource($article);
    }

    public function store(Request $request) 
    {
        $data = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $article = Article::create($data);

        return new ArticleResource($article);
    }
}