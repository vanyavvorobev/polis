import ArticleList from "@components/article/list/ArticleList";
import { Link } from "react-router-dom";
import "./ArticlesListPage.css";

const ArticlesListPage = () => {

    return (
        <div className="articles-list-wrapper">
            <ArticleList/>
            <Link className="create-article-link" to={"/articles/create"}>Создать статью</Link>
        </div>
    );
};

export default ArticlesListPage;
