import type { CommentModel } from "@features/comments/models/CommentModel";
import type { FC } from "react";
import dayjs from "dayjs";
import "./CommentsList.css";

interface CommentsListProps {
    comments: CommentModel[];
};

const CommentsList: FC<CommentsListProps> = ({
    comments
}) => {

    return (
        <>
            {comments.map(it => <div className="comment" key={it.id}>
                <div className="comment__header">
                    <span className="comment__title">
                        {it.authorName}
                    </span> 
                    <span className="comment__created-at">
                        {dayjs(it.createdAt).format('DD.MM.YYYY')}
                    </span>
                </div>
                <p className="comment__content">
                    {it.content}
                </p>
            </div>)}
        </>
    )
}

export default CommentsList;