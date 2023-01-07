import React from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";


const WorkingOnTask = () => {

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <Button variant="contained" className="approved">Mark as completed</Button>
      </Stack>
    </>
  );
};

export default WorkingOnTask;
