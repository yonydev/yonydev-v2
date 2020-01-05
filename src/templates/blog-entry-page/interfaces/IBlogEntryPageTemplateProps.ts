import { IPageFields } from "../../../shared/interfaces";
import { IEdgeNode } from "./IEdgeNode";

export interface IBlogEntryPageTemplateProps extends IPageFields {
  data: {
    markdownRemark: IEdgeNode;
  };
}
