import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const Container = styled("div")({
  background: "#f44336",
  color: "#FFF",
  display: "flex",
  alignItems: "center",
  height: "48px",
  marginBottom: "30px",
});

const Image = styled("img")({
  height: 34,
  "&:last-child": {
    margin: "0 50px 0 20px",
  },
});

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
  margin-left: 50px;
`;

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";
  return (
    <Container>
      <Text>For the best experience use inshorts app on your smartphone</Text>
      <div style={{ display: "flex", marginLeft: "auto" }}>
        <Image src={appleStore} alt="apple play" />
        <Image src={googleStore} alt="google play" />
      </div>
    </Container>
  );
};

export default InfoHeader;
