"use client";
import { Box, Button, Drawer, Typography } from "@mui/joy";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchTodo from "../SearchTodo/SearchTodo";
import ShowTask from "../ShowTask/ShowTask";

function ProjectTodoList() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  return (
    <Box
      sx={{
        border: "1px solid #9d9595",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "#0B6BCB",
          p: "1rem",
          height: "5rem",
        }}
      >
        <Typography level="title-lg" sx={{ color: "#fff" }}>
          My TODO List
        </Typography>
      </Box>
      <Box>
        <ShowTask tasks={tasks} setTasks={setTasks} />
      </Box>
      <Button
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          padding: ".8rem",
          border: "10px solid red",
        }}
      >
        <AddIcon />
      </Button>
      <Drawer
        // disablePortal
        anchor="bottom"
        size="sm"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <SearchTodo
          setDrawerOpen={setDrawerOpen}
          tasks={tasks}
          setTasks={setTasks}
        />
      </Drawer>
    </Box>
  );
}

export default ProjectTodoList;
