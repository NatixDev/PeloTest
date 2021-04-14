import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Slider from "./Slider";

const Layout = ({ children }) => {
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
      <main>{children}</main>
      <Slider />
    </>
  );
};

export default Layout;
