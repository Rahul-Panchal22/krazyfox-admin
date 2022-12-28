import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { SparkFill } from "../../svg";
import { useNavigate, useParams } from "react-router-dom";
// import { CampaignListing } from "../../actions/campaign";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
// import { toAbsoluteUrl } from "../../utils";
import "./Campaigns.scss";
// import { CampaignApplicationListing } from "../../actions/campaign";

const CampaignApplication = () => {
  
  const [campaignList, setCampaignList] = useState([]);
  const [search, setSearched] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { campaignId } = useParams();

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
    {
      field: "action",
      headerName: "Action",
      width: 110,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          navigate(`/view-campaign/${thisRow.id}`);
        };

        return (
          <IconButton aria-label="fingerprint" onClick={onClick}>
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];

  // const getAllCampaignListing = () => {
  //   dispatch(CampaignApplicationListing(`?campaignId=${campaignId}`))
  //     .then((res) => {
  //       console.log('res: ', res.data);
  //       setCampaignList(res.data);
  //     })
  //     .catch((err) => {
  //     });
  // };

  // useEffect(() => {
  //   getAllCampaignListing();
  // }, []);

  const handleRedirection = (e) => {
    navigate("/edit-campaign");
  };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  // useEffect(() => {
    // if (search !== null || search !== "" || search !== undefined) {
    //   if (search === null) {
    //     getAllCampaignListing();
    //   } else {
    //     setCampaignList(
    //       campaignList.filter((column) =>
    //         search.includes(column.campaign_title)
    //       )
    //     );
    //   }
    // } else {
    //   getAllCampaignListing();
    // }
  // }, []);

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
                  <TextField {...params} label="Search for campaign" />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button variant="contained" onClick={handleRedirection}>
              + Create New Campaign
            </Button>
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

export default CampaignApplication;
