import type { ResponseModel } from "@shared/api/ResponseModel";
import type { ArticleModel } from "@features/articles/models/ArticleModel";
import axiosInstance from "@shared/api/AxiosInstance";

const getArticleById = async (
    articleId: string
): Promise<ArticleModel> => {
    const { data } = await axiosInstance.get<ResponseModel<ArticleModel>>(`/articles/${articleId}`);
    return data.data;
};

export default getArticleById;
