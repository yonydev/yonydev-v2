import { IPageFields } from "../../../shared/interfaces";
import { IEdgeNode } from "./IEdgeNode";

export interface IHomePageTemplateProps extends IPageFields {
  data: {
    markdownRemark: IEdgeNode;
  };
}