import type { ResponseModel } from "@shared/api/ResponseModel";
import type { ArticleModel } from "@features/articles/models/ArticleModel";
import type { CreateArticleModel } from "@features/articles/models/CreateArticleModel";
import axiosInstance from "@shared/api/AxiosInstance";

const createArticle = async (
    article: CreateArticleModel
): Promise<ArticleModel> => {
    const { data } = await axiosInstance.post<ResponseModel<ArticleModel>>('/articles', article);
    return data.data;
};

export default createArticle;
