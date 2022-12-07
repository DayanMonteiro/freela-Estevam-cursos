import { styled } from "../../theme";

export const Container = styled("div", {});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingBottom: "3rem",

  backgroundColor: "$grey700",
});

export const AboutText = styled("div", {
  marginTop: "3rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // alignItems: "center",

  width: "80%",

  // backgroundColor: "red",
});

export const ContainerText = styled("div", {});

export const Title = styled("h1", {
  color: "$white",
  fontSize: "$xl",
});

export const Paragraph = styled("p", {
  paddingTop: "1rem",
  color: "$white",
  fontSize: "$sm",
  textAlign: "justify",
});

export const ImageAbout = styled("img", {
  width: "40rem",
  marginLeft: "5rem",
});

export const LinkDirect = styled("a", {
  color: "$white",
  fontSize: "$sm",

  "&:hover": {
    //  backgroundColor: "$grey500",
    color: "$primary200",
  },
});
