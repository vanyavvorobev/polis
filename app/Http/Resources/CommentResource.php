<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'articleId' => $this->article_id,
            'authorName' => $this->author_name,
            'content' => $this->content,
            'createdAt' => $this->created_at->toIso8601String(),
        ];
    }
}
