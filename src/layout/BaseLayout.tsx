import React from "react";
import SideMenu from "../components/partials/SideMenu";

import "../scss/index.scss"


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