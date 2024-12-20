import Header from "../components/Header.jsx";
import { useAuth } from "../components/Auth/Auth.jsx";
import { useFetch } from "../hooks/net.js";
function generatePostUrl(query = " ", tags = []) {
  const route = "/api/posts";
  const searchParam = new URLSearchParams();
  searchParam.set("query", query);
  searchParam.set("tags", tags);
  return `${route}?${searchParam.toString()}`;
}
const App = () => {
  const { user } = useAuth();
  const { data, loading } = useFetch(generatePostUrl());
  return (
    <>
      {user ? <Header username={`${user.firstname} ${user.lastname}`} /> : null}
      <section className="main-section">
        <h1> Post </h1>
        <p> Il semble qu'il n'y ait pas encore de post </p>
        <p> {!user ? "Connecter vous et " : ""} Commencer par crée </p>
        {
          loading
            ? JSON.stringify(data)
            : null /* {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h4>{article.title}</h4>
            <p>By {article.author}</p>
            <p>
              {article.views} Views • {article.likes} Likes • {article.comments}{" "}
              Comments
            </p>
          </div>
        ))} */
        }
      </section>
    </>
  );
};

export default App;
