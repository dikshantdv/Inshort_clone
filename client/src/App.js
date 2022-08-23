import styled from "@emotion/styled";
import { Fragment } from "react";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";

const Container = styled("div")({
  width: "60%",
  margin: "40px auto 0 auto",
});

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Fragment>
  );
}

export default App;
