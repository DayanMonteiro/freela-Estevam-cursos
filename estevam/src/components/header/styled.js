import { styled } from "../../theme";

export const Container = styled("div", {
  marginTop: 0,
  width: "100vw",
  height: "10vh",
  color: "$white",
  backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Nav = styled("div", {
  backgroundColor: "green",
  width: "70vw",
  height: "5rem",
  marginTop: "5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});

export const LinkList = styled("a", {
  width: "100%",
  height: "100%",
  fontSize: "$lg",
  textDecoration: "none",
  listStyle: "none",
  cursor: "pointer",
  //   margin: "0 auto",
  //   padding: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "$gray500",
    color: "$gray200",
  },
});
