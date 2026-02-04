import CreateArticleForm from "@components/article/form/CreateArticleForm";
import createArticle from "@features/articles/api/CreateArticle";
import type { CreateArticleModel } from "@features/articles/models/CreateArticleModel";
import { useNavigate } from "react-router-dom";

const ArticleCreatePage = () => {

    const navigate = useNavigate();

    const handleCreateArticle = (article: CreateArticleModel) => {
        createArticle(article)
            .then(() => navigate("/articles"))
    }

    return (
        <CreateArticleForm onCreateArticle={handleCreateArticle}/>
    )
}

export default ArticleCreatePage;