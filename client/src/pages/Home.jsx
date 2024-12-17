import Header from "../components/Header.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TopCreators from "../components/TopCreators.jsx";
import LatestArticles from "../components/LatestArticles.jsx";
import Layout from "../components/Layout/Layout.jsx";

const App = () => {

  return <Layout>
    <Header username="Elizatech5.0" />
    <section className="main-section">
      <SectionHeader title="What’s New?" linkText="See All →" />
      <TopCreators />
      <LatestArticles />
    </section>
  </Layout>
};

export default App;
