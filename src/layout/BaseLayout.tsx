import React from "react";
import "../scss/index.scss"


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