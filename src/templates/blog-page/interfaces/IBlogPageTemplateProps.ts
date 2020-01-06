import { IPageFields } from "../../../shared/interfaces";
import { IEdgeNode } from "./IEdgeNode";
import { IEdgesNode } from "./IEdgesNode";

export interface IBlogPageTemplateProps extends IPageFields {
  data: {
    markdownRemark: IEdgeNode;
    allMarkdownRemark: {
      edges: IEdgesNode[];
    }
  }
}