import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = Page => () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <div>
      {/* <Header /> */}
      <Page />
      <style jsx>
        {`
          div {
            margin: 20px;
            padding: 20px;
            max-width: 1600px;
            margin: auto;
          }
        `}
      </style>
    </div>
  </>
);

export default withLayout;
