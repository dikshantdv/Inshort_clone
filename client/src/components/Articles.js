import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    setNews(response.data);
  };
  return (
    <div>
      {news.map((data) => (
        <ArticleItem article={data} />
      ))}
    </div>
  );
};

export default Articles;
