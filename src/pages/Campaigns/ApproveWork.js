import React from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";


const ApproveWork = () => {

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <Button variant="outlined" className="rejected">Reject Application</Button>
        <Button variant="contained" className="approved">Approve Application</Button>
      </Stack>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <FormControl variant="filled">
          <TextField id="filled-multiline-static" label="Type here..." variant="filled" />
        </FormControl>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack>
    </>
  );
};

export default ApproveWork;
