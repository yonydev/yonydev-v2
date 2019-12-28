import React from "react";

const withBaseLayout = (Page: any) => {
  return class extends React.Component<{}, {}> {
    public render() {
      return (
        <>
          <main>
            <h1>With Base Layout funciona!</h1>
            <Page {...this.props} />
          </main>
        </>
      );
    };
  };
};

export default withBaseLayout;