import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const ScheduleForm = () => {
  const [dataset, setDataset] = useState("");
  const [complexity, setComplexity] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5001/api/schedule", {
        dataset,
        complexity,
      });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error submitting schedule:", error);
      setResponseMessage("Failed to submit schedule.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Create a Learning Schedule
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="dataset-label">Dataset</InputLabel>
        <Select
          labelId="dataset-label"
          value={dataset}
          onChange={(e) => setDataset(e.target.value)}
          label="Dataset"
        >
          <MenuItem value="MNIST">MNIST</MenuItem>
          <MenuItem value="CIFAR-10">CIFAR-10</MenuItem>
          <MenuItem value="Fashion-MNIST">Fashion-MNIST</MenuItem>
          <MenuItem value="SVHN">SVHN</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Learning Complexity"
        value={complexity}
        onChange={(e) => setComplexity(e.target.value)}
        placeholder="e.g., easy, medium, hard"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Schedule
      </Button>
      {responseMessage && (
        <Typography variant="body1" textAlign="center" color="success.main">
          {responseMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ScheduleForm;
