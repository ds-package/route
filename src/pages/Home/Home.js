import React from "react";
import Header from "../../components/Header/Header";
import ProjectList from "../../components/ProjectList/ProjectList";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Route</title>
        <meta
          name="description"
          content="design systems and product designers portfolios and records"
          data-react-helmet="true"
        />

        <meta property="og:title" content="Route" data-react-helmet="true" />
        <meta
          property="og:site_name"
          content="Route Finding"
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://route-finding.vercel.app/"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="design systems and product designers portfolios and records"
        />
        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/43980992/277132547-39d002f0-67f2-4030-a365-3d27eb8525d1.png"
          data-react-helmet="true"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="route-finding.vercel.app"
          data-react-helmet="true"
        />
        <meta
          property="twitter:url"
          content="https://route-finding.vercel.app/"
          data-react-helmet="true"
        />
        <meta name="twitter:title" content="Route" data-react-helmet="true" />
        <meta
          name="twitter:description"
          content="design systems and product designers portfolios and records"
          data-react-helmet="true"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/43980992/277132547-39d002f0-67f2-4030-a365-3d27eb8525d1.png"
          data-react-helmet="true"
        />
      </Helmet>
      <Header />
      <ProjectList />
    </div>
  );
};

export default Home;
