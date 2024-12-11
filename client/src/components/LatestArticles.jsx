import React from "react";
import "../styles/LatestArticles.css";

const LatestArticles = () => {
  const articles = [
    {
      title: "10 easy gestures to adopt to keep your computer safe",
      author: "Cybersecurity_Daily_Updates",
      views: "651,324",
      likes: "36,854",
      comments: "560",
    },
    {
      title: "A list of AI’s for every purpose (I promise you’ll love it)",
      author: "IA_Specialist",
      views: "2.2M",
      likes: "1.9M",
      comments: "30,982",
    },
    {
      title: "Blockchain developer best practices on innovationchain",
      author: "Lauren Grey",
      views: "90,389",
      likes: "15,023",
      comments: "23",
    },
  ];

  return (
    <div className="latest-articles">
      <h3>Latest Articles</h3>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h4>{article.title}</h4>
            <p>By {article.author}</p>
            <p>
              {article.views} Views • {article.likes} Likes • {article.comments}{" "}
              Comments
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
