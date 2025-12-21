"use client";
import { Box, Checkbox, Stack, Typography } from "@mui/joy";
import { useState } from "react";

export default function ShowTask({ tasks, setTasks }) {
  const [completed, setCompleted] = useState([]);
  const handleCheck = (e, index) => {
    e.target.blur();
    setCompleted((prev) => [...prev, index]);
    setTimeout(() => {
      setTasks((prev) => prev.filter((_, i) => i !== index));
      setCompleted((prev) => prev.filter((i) => i !== index));
    }, 1000);
  };

  return (
    <Box>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <Box
          sx={{
            background: "#e6e6e6",
            height: "90dvh",
            padding: "1rem",
            borderRadius: "5px",
            overflowY: "auto",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {tasks.map((e, index) => (
            <Stack
              key={index}
              direction="row"
              spacing={2}
              sx={{
                padding: "1rem",
                borderRadius: "15px",
                background: "#fff",
                alignItems: "center",
                mb: "1rem",
                maxHeight: "100%",
                overflow: "auto",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Checkbox color="primary" onClick={() => handleCheck(index, e)} />
              <Typography
                sx={{
                  textDecoration: completed.includes(index)
                    ? "line-through"
                    : "none",
                  color: completed.includes(index) ? "gray" : "inherit",
                  transition: "all 0.3s ease",
                }}
              >
                {e}
              </Typography>
            </Stack>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <Typography>No any Todo yet.</Typography>
        </Box>
      )}
    </Box>
  );
}
