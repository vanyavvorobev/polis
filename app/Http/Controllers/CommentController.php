<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use Illuminate\Http\Request;
use App\Models\Article;

class CommentController extends Controller
{

    public function store(Request $request, Article $article)
    {
        $data = $request->validate([
            'authorName' => 'required|string',
            'content' => 'required|string',
        ]);

        $comment = $article->comments()->create([
            'author_name' => $data['authorName'],
            'content' => $data['content'],
        ]);

        return new CommentResource($comment);
    }
}
