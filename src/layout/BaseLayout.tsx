import React from "react";
import "../scss/globals.scss"


const withBaseLayout = (Page: any) => {
  return class extends React.Component<{}, {}> {
    public render() {
      return (
        <>
          <main>
            <Page {...this.props} />
          </main>
        </>
      );
    };
  };
};

export default withBaseLayout;