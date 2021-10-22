import React from "react";
import { Helmet } from "react-helmet";
import { seo } from "../components/portfolio";

class SeoHeader extends React.Component {
  render() {
    return (
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
    );
  }
}

export default SeoHeader;
