import React from "react";
import "../scss/index.scss"

const SideMenu = React.lazy(() => import("../components/partials/SideMenu"));

const withBaseLayout = (Page: any) => {
  return class extends React.Component<{}, {}> {
    public render() {
      return (
        <>
          <main>
            <React.Suspense fallback="">
              <SideMenu />
            </React.Suspense>
            <Page {...this.props} />
          </main>
        </>
      );
    };
  };
};

export default withBaseLayout;