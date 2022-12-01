import React from "react";
import { Button, Stack } from "@mui/material";
import { Cross, Redo, RightStatus } from "../../svg";


const TaskCompleted = () => {

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <Button variant="contained" className="approved"><RightStatus scgFill="#B71C1C" />Mark as completed</Button>
        <Button variant="outlined" className="rejected"><Cross scgFill="#B71C1C" />Stop working</Button>
        <Button variant="contained" className="approved"><Redo scgFill="#ffffff" />Redo</Button>
      </Stack>
    </>
  );
};

export default TaskCompleted;
