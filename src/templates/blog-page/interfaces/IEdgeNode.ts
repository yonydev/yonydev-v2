import { IEdgeNodeFields } from "../../../shared/interfaces";
import { IQuotes } from "./IQuotes";
import { IBlog } from "./IBlog";

export interface IEdgeNode extends IEdgeNodeFields {
  frontmatter: {
    title: string;
    quotes: IQuotes[];
    blog: IBlog[];
  }
}