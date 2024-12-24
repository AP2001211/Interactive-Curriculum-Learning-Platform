import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Select, MenuItem, Typography, FormControl, InputLabel } from "@mui/material";

const DatasetSelector = () => {
  const [datasets, setDatasets] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState("");

  useEffect(() => {
    // Fetch datasets from the backend
    axios.get("http://127.0.0.1:5001/api/datasets")
      .then((response) => setDatasets(response.data))
      .catch((error) => console.error("Error fetching datasets:", error));
  }, []);

  const handleDatasetChange = (event) => {
    setSelectedDataset(event.target.value);
  };

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
      <Typography variant="h5" gutterBottom>
        Select a Dataset
      </Typography>
      <FormControl sx={{ width: "250px" }}>
        <InputLabel id="dataset-label">Dataset</InputLabel>
        <Select
          labelId="dataset-label"
          value={selectedDataset}
          onChange={handleDatasetChange}
          label="Dataset"
        >
          {datasets.map((dataset) => (
            <MenuItem key={dataset} value={dataset}>
              {dataset}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ marginTop: "20px" }}>
        {selectedDataset && (
          <Typography variant="body1">
            You have selected: {selectedDataset}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DatasetSelector;
