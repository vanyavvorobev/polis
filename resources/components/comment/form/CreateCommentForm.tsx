import { useState } from "react";
import type { FC, SubmitEvent } from "react";
import "./CreateCommentForm.css";
import type { CreateCommentModel } from "@features/comments/models/CreateCommentModel";

interface CreateCommentFormProps {
    onCreateComment: (comment: CreateCommentModel) => void
}
const CreateCommentForm: FC<CreateCommentFormProps> = ({
    onCreateComment
}) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreateComment({authorName: author, content: content});
        setAuthor('');
        setContent('');
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input 
                name="authorName" 
                className="comment-author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Имя"
            />
            <textarea 
                name="content" 
                className="comment-content"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Комментарий"
            />
            <button className="comment-submit" type="submit">Отправить</button>
        </form>
    )
}

export default CreateCommentForm;