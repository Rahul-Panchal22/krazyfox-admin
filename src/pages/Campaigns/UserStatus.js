import React from "react";
import { Button, Stack } from "@mui/material";


const UserStatus = () => {

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <Button variant="outlined" className="rejected">Rejected</Button>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack>
    </>
  );
};

export default UserStatus;
