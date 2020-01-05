import { IEdgeNodeFields } from "../../../shared/interfaces";

export interface IEdgeNode extends IEdgeNodeFields {
  frontmatter: {
    date: string;
    title: string;
    timeToRead: string;
    content:string;
  }
}