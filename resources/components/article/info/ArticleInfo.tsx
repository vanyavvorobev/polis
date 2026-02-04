import type { FC } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./ArticleInfo.css";

interface ArticleInfoProps {
    id: string;
    title: string;
    content: string;
    createdAt: string;

    short?: boolean;
};

const ArticleInfo: FC<ArticleInfoProps> = ({
    id,
    title,
    content,
    createdAt,

    short = false
}) => {

    return (
        <div className="article-info">
            <div className="article-info__header">
                <span className={`article-info__title ${ short ? "article-info__title_short" : "" }`}>
                    {title}
                </span> 
                <span className="article-info__created-at">
                    {dayjs(createdAt).format('DD.MM.YYYY')}
                </span>
            </div>
            <p className={`article-info__content ${ short ? "article-info__content_short" : "" }`}>
                {Array.from(Array(200)).map(it => content)}
            </p>
            {short && <Link className="article-info__open-button" to={`/articles/${id}`}>
                Читать полностью
            </Link>}
        </div>
    )
}

export default ArticleInfo;