import React from "react"
import { graphql } from "gatsby"
import { withBaseLayout } from "../../layout"
import Container from "../../components/conatiner"
import { IBlogPageTemplateProps } from "./interfaces/IBlogPageTemplateProps"
import BlogEntry from "../../components/blogEntry"

const BlogPageTemplate = ({ data: blogData }: IBlogPageTemplateProps) => {
  const { markdownRemark: { frontmatter }, allMarkdownRemark: { edges: blogs } } = blogData;
  return (
    <>
      <section className="py-18">
        <Container>
          <div className="w-full lg:w-8/12 mx-auto">
            <h2 className="font-bold font-rubik text-surface-500 text-5xl capitalize">
              {frontmatter.title}
            </h2>
            <div className="mt-10">
              {blogs.map((blog, index) => (
                <BlogEntry
                  key={index}
                  slug={blog.node.fields.slug}
                  title={blog.node.frontmatter.title}
                  date={blog.node.frontmatter.date}
                  timeToRead={blog.node.frontmatter.timeToRead}
                  description={blog.node.frontmatter.description}
                  className="mb-8"
                />
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
