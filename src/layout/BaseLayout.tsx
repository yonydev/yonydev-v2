import React from "react";
import "../scss/index.scss"
import loadable from "@loadable/component"

const SideMenu = loadable(() => import("../components/partials/SideMenu"))

const withBaseLayout = (Page: any) => {
  return class extends React.Component<{}, {}> {
    public render() {
      return (
        <>
          <main>
            <SideMenu />
            <Page {...this.props} />
          </main>
        </>
      );
    };
  };
};

export default withBaseLayout;