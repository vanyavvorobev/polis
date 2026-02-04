import { useState, useEffect } from "react";
import type { ArticleModel } from "@features/articles/models/ArticleModel";
import getArticlesList from "@features/articles/api/GetArticlesList";
import LoadingSpiner from "@shared/components/LoadingSpiner";
import ArticleInfo from "@components/article/info/ArticleInfo";

const ArticleList = () => {

    const [ articles, setArticles ] = useState<ArticleModel[]>([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        getArticlesList()
            .then(setArticles)
            .then(() => setLoading(false));
    }, []);

    return (
        <LoadingSpiner isLoading={loading}>
            {articles.map(it => <ArticleInfo short {...it} key={it.id}/>)}
        </LoadingSpiner>
    );
};

export default ArticleList;
