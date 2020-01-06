import React from "react";
import "../scss/index.scss"
import SideMenu from "../components/partials/SideMenu"

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