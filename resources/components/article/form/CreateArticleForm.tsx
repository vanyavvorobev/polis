import { useState } from "react";
import type { FC, SubmitEvent } from "react";
import "./CreateArticleForm.css";
import type { CreateArticleModel } from "@features/articles/models/CreateArticleModel";

interface CreateArticleFormProps {
    onCreateArticle: (article: CreateArticleModel) => void
}

const CreateArticleForm: FC<CreateArticleFormProps> = ({ onCreateArticle }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreateArticle({ title, content });
        setTitle('');
        setContent('');
    }

    return (
        <form className="article-form" onSubmit={handleSubmit}>
            <input
                name="title"
                className="article-title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Заголовок статьи"
            />
            <textarea
                name="content"
                className="article-content"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Текст статьи"
            />
            <button className="article-submit" type="submit">Создать</button>
        </form>
    )
}

export default CreateArticleForm;