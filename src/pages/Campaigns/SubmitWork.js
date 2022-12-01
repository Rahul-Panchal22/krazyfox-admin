import React, { useState } from "react";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import UploadHere from "../../components/UploadFile";
import { Link } from "react-router-dom";


const SubmitWork = () => {

  const [fileupload, setFileupload] = useState({});

  return (
    <>
      <Stack direction="row" spacing={2} className="pending-btn-row">
        <FormControl variant="filled">
          <TextField id="filled-multiline-static" label="Type here..." variant="filled" />
        </FormControl>
        <Button variant="contained" className="approved">Approved</Button>
      </Stack>
      <Link to="/">https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiGl-zUvtr6AhUuxTgGHWxBAxUQPAgI</Link>
      <Stack direction="row" spacing={1}>
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} />
        <UploadHere uploadLabel="" uploadText="" uploadBtn="+" uplaodWidth={166} uplaodHeight={248} setFileupload={setFileupload} />
      </Stack>
    </>
  );
};

export default SubmitWork;
