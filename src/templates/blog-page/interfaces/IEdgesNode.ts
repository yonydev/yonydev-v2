export interface IEdgesNode {
  node: {
    frontmatter: {
      title: string;
      description: string;
      timeToRead: string;
      date: string;
    };
    fields: {
      slug: string;
    }
  }
}