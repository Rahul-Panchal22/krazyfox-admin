import React from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";


const PriceFinalization = () => {

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <FormControl variant="filled">
          <TextField id="filled-multiline-static" label="Type here..." variant="filled" />
        </FormControl>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack>
    </>
  );
};

export default PriceFinalization;
