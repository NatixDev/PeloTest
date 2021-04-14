import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import GlobalStyle from "../globalStyle";

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Seo title="Home" />
    </Layout>
  </>
);

export default IndexPage;
