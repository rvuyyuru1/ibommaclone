import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";
const SEO: React.FC<NextSeoProps> = ({ title, description, ...rest }) => {
  return (
    <NextSeo
      title={title}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: "none",
        maxVideoPreview: -1,
      }}
      description={description}
      {...rest}
    />
  );
};

export default SEO;
