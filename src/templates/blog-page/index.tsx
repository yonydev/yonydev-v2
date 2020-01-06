import React from "react"
import { Link, graphql } from "gatsby"
import { withBaseLayout } from "../../layout"
import Container from "../../components/conatiner"
import { IBlogPageTemplateProps } from "./interfaces/IBlogPageTemplateProps"

const BlogPageTemplate = ({ data: blogData }: IBlogPageTemplateProps) => {
  const { markdownRemark: { frontmatter }, allMarkdownRemark: { edges: blogs } } = blogData;
  console.log("frontmatter: ", frontmatter);
  console.log("blogs: ", blogs);
  return (
    <>
      <section className="py-18">
        <Container>
          <div className="w-full lg:w-8/12 mx-auto">
            <h2 className="font-bold font-rubik text-surface-500 text-5xl capitalize">
              {frontmatter.title}
            </h2>
            <div>
              {blogs.map((blog, index) => (
                <div key={index}>
                  <Link to={blog.node.fields.slug}>
                    <h3 className="font-bold font-rubik text-3xl capitalize">
                      {blog.node.frontmatter.title}
                    </h3>
                    <div className="font-karla text-surface-300 flex">
                      <p>{blog.node.frontmatter.date}&nbsp;&#x02235;</p>
                      <p>&nbsp;{blog.node.frontmatter.timeToRead}</p>
                    </div>
                    <p>{blog.node.frontmatter.description}</p>
                  </Link>
                </div>
              ))}
            </div>
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
        title
        quotes {
          content
          author
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog-entry-page" } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            timeToRead
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default withBaseLayout(BlogPageTemplate)
