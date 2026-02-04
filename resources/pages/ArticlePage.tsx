import ArticleInfo from "@components/article/info/ArticleInfo";
import CreateCommentForm from "@components/comment/form/CreateCommentForm";
import CommentsList from "@components/comment/list/CommentsList";
import getArticleById from "@features/articles/api/GetArticleById";
import type { ArticleModel } from "@features/articles/models/ArticleModel";
import LoadingSpiner from "@shared/components/LoadingSpiner";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./ArticlePage.css";
import type { CreateCommentModel } from "@features/comments/models/CreateCommentModel";
import createComment from "@features/comments/api/CreateComment";

const ArticlePage = () => {
    const { id } = useParams();
    const [ article, setArticle ] = useState<null | ArticleModel>(null);
    const [ loading, setLoading ] = useState(false);

    const loadArticle = useCallback(() => {
        if(!id) return;
        setLoading(true);
        getArticleById(id)
            .then(setArticle)
            .then(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        loadArticle();
    }, [loadArticle]);

    const handleCreateComment = (comment: CreateCommentModel) => {
        if(!id) return;
        createComment(id, comment)
            .then(loadArticle);
    }

    return (
        <LoadingSpiner isLoading={loading}>
            {article ? <>
                <ArticleInfo {...article}/>
                <div className="comments-wrapper">
                    <p className="comments-title">Комментарии: </p>
                    <CreateCommentForm onCreateComment={handleCreateComment}/>
                    <CommentsList comments={article.comments}/>
                </div>
            </> : null}
        </LoadingSpiner>
    )
};

export default ArticlePage;
