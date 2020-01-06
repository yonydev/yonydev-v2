import React from "react"
import { graphql } from "gatsby"
import { converter } from "../../utils"
import { withBaseLayout } from "../../layout"
import { IBlogEntryPageTemplateProps } from "./interfaces/IBlogEntryPageTemplateProps"
import Container from "../../components/conatiner"

const BlogEntryTemplate = ({ data: blogEntryData }: IBlogEntryPageTemplateProps) => {
  const { frontmatter } = blogEntryData.markdownRemark
  return (
    <>
      <section className="py-18">
        <Container>
          <div className="w-full lg:w-8/12 mx-auto">
            <h2 className="font-bold font-rubik text-surface-500 text-4xl">
              {frontmatter.title}
            </h2>
            <div className="mb-7 font-karla text-surface-300 flex">
              <p>{frontmatter.date}&nbsp;&#x02235;</p>
              <p>&nbsp;{frontmatter.timeToRead}</p>
            </div>
            <div className="blog-entry" dangerouslySetInnerHTML={{ __html: converter.makeHtml(frontmatter.content) }} />
          </div>
        </Container>
      </section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        timeToRead
        title
        content
      }
    }
  }
`

export default withBaseLayout(BlogEntryTemplate);
