"use client";
import { Button, Box, Typography } from "@mui/joy";
import { TextField } from "@mui/material";
import { useState } from "react";

function SearchTodo({ setDrawerOpen, setTasks }) {
  const [inputTask, setInputTask] = useState("");
  const handleSave = () => {
    const text = inputTask.trim();
    if (text === "") return;
    setTasks((prev) => [...prev, text]);
    setInputTask("");
    setDrawerOpen(false);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Box
        sx={{
          width: { xs: "80%", sm: "70%", md: "50%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: "3rem",
        }}
      >
        <Box>
          <TextField
            fullWidth
            label="Enter your Todo"
            variant="filled"
            size="small"
            name="name"
            value={inputTask}
            onChange={(e) => {
              setInputTask(e.target.value);
            }}
            sx={{
              background: "#e6e6e6",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={handleSave}>Done</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchTodo;
