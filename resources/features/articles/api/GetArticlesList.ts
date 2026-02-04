import type { ResponseModel } from "@shared/api/ResponseModel";
import type { ArticleModel } from "@features/articles/models/ArticleModel";
import axiosInstance from "@shared/api/AxiosInstance";

const getArticlesList = async (): Promise<ArticleModel[]> => {
    const { data } = await axiosInstance.get<ResponseModel<ArticleModel[]>>('/articles');
    return data.data;
};

export default getArticlesList;
