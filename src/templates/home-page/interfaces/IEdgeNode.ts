import { IEdgeNodeFields } from "../../../shared/interfaces";

export interface IEdgeNode extends IEdgeNodeFields {
  frontmatter: {
    title: string;
    githubURL: string;
    instagramURL: string;
    twitterURL: string;
    linkedinURL: string;
    mediumURL: string;
  };
}
