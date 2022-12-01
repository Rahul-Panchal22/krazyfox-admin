import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  // FormControl,
  Grid,
  // InputLabel,
  // MenuItem,
  // Select,
  TextField,
} from "@mui/material";
import Stack from '@mui/material/Stack';
import { SparkFill } from "../../svg";

const PaymentsStatus = () => {

  const [paymentList, setPaymentList] = useState([]);  

  const columns = [
    { field: "id", headerName: "Sr No.", width: 80 },
    {
      field: "brand_logo_url",
      headerName: "Brand Logo",
      width: 150,
      renderCell: (params) => <img src={params.value} alt="" />,
      sortable: false,
      filterable: false,
    },
    {
      field: "brand_name",
      headerName: "Brand Name",
      width: 150,
    },
    {
      field: "campaign_title",
      headerName: "Campaign Title",
      width: 180,
    },
    {
      field: "campaign_price_range",
      headerName: "Price Range",
      width: 160,
    },
    {
      field: "campaign_description",
      headerName: "Category",
      width: 110,
    },
    {
      field: "status",
      headerName: "Live/ Paused",
      width: 110,
      renderCell: () => {
        <SparkFill />;
      },
    },
  ];

  return (
    <>
      <div className="search-row">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={8}>
            <Stack spacing={2} sx={{ width: 630 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                size='small'
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Search for campaign" />}
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={7}>
          <Stack direction="row" spacing={2} className="pending-btn-row">
            <Button variant="contained" className="filter-btn pending">Pending</Button>
            <Button variant="contained" className="filter-btn approved">Approved</Button>
            <Button variant="contained" className="filter-btn rejected">Rejected</Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack direction="row" justifyContent="flex-end" spacing={2} className="filter-row">
            <Button variant="contained" className="filter-btn active">Export Excel</Button>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ height: 632, width: "auto" }}>
        <DataGrid
          rows={paymentList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];


export default PaymentsStatus;
