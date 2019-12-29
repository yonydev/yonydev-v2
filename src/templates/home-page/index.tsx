import React from "react"
import { graphql } from "gatsby"
import Container from "../../components/conatiner"
import { withBaseLayout } from "../../layout"
// import SEO from "../components/seo"


const IndexPageTemplate =  ({ data }: any) => {
  const title = data.markdownRemark
  return (
    <>
      {/* <SEO title="Home" /> */}
      <Container>
        <div>
          <h1>{title.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: title.html }} />
        </div>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default withBaseLayout(IndexPageTemplate);