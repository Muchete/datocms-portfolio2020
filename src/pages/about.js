import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { Link } from "gatsby-plugin-modal-routing";
import Layout from "../components/layout";

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />
    <div className="modal">
      <div className="modal__content">
        <Link to="/" className="modal__close">
          X
        </Link>
        <div
          className="modal__text"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
