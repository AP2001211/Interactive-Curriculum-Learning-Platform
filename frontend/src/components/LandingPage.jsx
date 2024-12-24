import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Interactive Curriculum Learning Platform
      </Typography>
      <Typography variant="h6" paragraph>
        This platform allows you to explore curriculum learning techniques on
        machine learning tasks using datasets like MNIST and CIFAR-10.
      </Typography>
      <Typography variant="body1" paragraph>
        Get started by selecting a dataset and configuring the learning schedule!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => (window.location.href = "/dataset")}
        sx={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Start Exploring
      </Button>
    </Box>
  );
};

export default LandingPage;
