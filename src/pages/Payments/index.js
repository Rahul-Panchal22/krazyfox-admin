import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { SearchIcon, SparkFill } from "../../svg";


const Payments = () => {

  const [campaignList, setCampaignList] = useState([]);
  const [search, setSearched] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "Sr No.",
      flex: 0.5,
    },
    {
      field: "brand_logo_url",
      headerName: "Brand Logo",
      flex: 1.5,
      renderCell: (params) => <img src={params.value} alt="" />,
      sortable: false,
      filterable: false,
    },
    {
      field: "brand_name",
      headerName: "Brand Name",
      flex: 1.5,
    },
    {
      field: "campaign_title",
      headerName: "Campaign Title",
      flex: 1.8,
    },
    {
      field: "campaign_price_range",
      headerName: "Price Range",
      flex: 1.6,
    },
    {
      field: "campaign_description",
      headerName: "Category",
      flex: 1.1,
    },
    {
      field: "status",
      headerName: "Live/ Paused",
      flex: 1,
      align: 'center',
      renderCell: () => {
        <SparkFill />;
      },
    },
  ];

  const getAllCampaignListing = () => {
    // dispatch(CampaignListing())
    //   .then((res) => {
    //     setCampaignList(res.data);
    //   })
    //   .catch((err) => {
    //   });
  };

  useEffect(() => {
    getAllCampaignListing();
  }, []);

  // const handleRedirection = (e) => {
  //   navigate("/edit-campaign");
  // };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getAllCampaignListing();
      } else {
        setCampaignList(
          campaignList.filter((column) =>
            search.includes(column.campaign_title)
          )
        );
      }
    }
  }, [search]);

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
          <Grid item xs={9}>
            <Stack spacing={2} sx={{ width: 630 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                size="small"
                options={campaignList.map((option) => option.campaign_title)}
                onChange={(e, value) => onMutate(e, value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Search for campaign"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "100%" }}>
        <DataGrid
          rows={campaignList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

export default Payments;
