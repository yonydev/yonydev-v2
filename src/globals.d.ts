declare module "*.scss" {
  const content: {[className: string]: string};
  export = content;
}

declare module "classnames";
declare module "react-burger-menu";

declare module "*.svg" {
  const content: any;
  export default content;
}