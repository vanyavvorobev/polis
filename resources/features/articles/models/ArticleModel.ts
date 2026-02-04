import type { CommentModel } from "@features/comments/models/CommentModel";

interface ArticleModel {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    comments: CommentModel[];
};

export type { ArticleModel };
