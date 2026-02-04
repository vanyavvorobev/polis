import type { ResponseModel } from "@shared/api/ResponseModel";
import type { CommentModel } from "@features/comments/models/CommentModel";
import type { CreateCommentModel } from "@features/comments/models/CreateCommentModel";
import axiosInstance from "@shared/api/AxiosInstance";

const createComment = async (
    articleId: string,
    comment: CreateCommentModel
): Promise<CommentModel> => {
    const { data } = await axiosInstance.post<ResponseModel<CommentModel>>(`/articles/${articleId}/comments`, comment);
    return data.data;
};

export default createComment;
