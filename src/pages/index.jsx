import * as React from "react";
import * as styles from "../styles/home.module.css";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Front-End</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Project
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="banner"
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "GatsbyJMM.png" }) {
      childImageSharp {
        # fluid {
        #   ...GatsbyImageSharpFluid
        # }

        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
