import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ArticlesListPage from "@pages/ArticlesListPage.tsx";
import ArticlePage from "@pages/ArticlePage.tsx";
import ArticleCreatePage from "@pages/ArticleCreatePage";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/articles" element={<ArticlesListPage/>} />
            <Route path="/articles/:id" element={<ArticlePage/>} />
            <Route path="/articles/create" element={<ArticleCreatePage/>} />
            <Route path="*" element={<Navigate to="/articles" replace />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
