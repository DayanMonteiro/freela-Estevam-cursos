import { styled } from "../../theme";

export const Container = styled("div", {});

export const Content = styled("div", {
  // backgroundColor: "red",

  padding: "3rem",

  backgroundColor: "$grey900",
  width: "100vw",
  height: "100vh",
});

export const Banner = styled("div", {
  width: "10rem",
  height: "20rem",
  // display: "flex",
  // flexDirection: "row",
  // justifyContent: "space-around",
});

export const Presentation = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
});

export const ContainerText = styled("div", {
  // backgroundColor: "red",

  width: "47%",
  textAlign: "justify",
});

export const ContainerImage = styled("div", {
  // backgroundColor: "blue",
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",
  justifyContent: "space-between",
  width: "50%",
});

export const Title = styled("h1", {
  color: "$white",
  fontSize: "$xl",
  marginTop: "1rem",
});

export const SubTitle = styled("h1", {
  // marginTop: "2rem",
  color: "$white",
  // backgroundColor: "red",
  // padding: "2rem",
  marginTop: "2rem",
  fontSize: "$md",
});

export const Text = styled("p", {
  marginTop: "2rem",
  color: "$white",
  fontSize: "$md",
  lineHeight: "2.5rem",
});

export const FrontCover = styled("img", {
  //  objectFit: "contain",
});
