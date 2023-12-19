import { Button, Container, Paper } from "@mui/material";
import React from "react";
import { useReactToPrint } from "react-to-print";

const PrintComponent = ({ children }) => {
  const paperRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => paperRef.current,
  });

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        my: 5,
        paddingBottom: 5
      }}
    >
      <Paper
        ref={paperRef}
        elevation={3}
        sx={{ display: "flex", padding: 3, gap: "5vw", width: "80%" }}
      >
        {children}
      </Paper>
      <Button
        onClick={handlePrint}
        sx={{
          position: "absolute",
          bottom: -20,
          width: "30vw",
        }}
        variant="contained"
      >
        Print!
      </Button>
    </Container>
  );
};

export default PrintComponent;
