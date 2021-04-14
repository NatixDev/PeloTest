import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Slider from "./Slider";

const Layout = () => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Header />
      <Slider />
    </>
  );
};

export default Layout;
