import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { ActionArrow, Eye, RightStatus, SearchIcon, SparkFill, SparkOutline } from "../../svg";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { CampaignListing } from "../../actions/campaign";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./Campaigns.scss";
import Visibility from "@mui/icons-material/Visibility";

const Campaigns = (params) => {
  const [campaignList, setCampaignList] = useState([]);
  const [search, setSearched] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useLocation();
  console.log('history: ', history);
  const pathname = history.pathname ;

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
      flex: 1.5,
    },
    {
      field: "campaign_price_range",
      headerName: "Price Range",
      flex: 0.9,
    },
    {
      field: "campaign_description",
      headerName: "Campaign Description",
      flex: 1.8,
    },
    {
      field: "status",
      headerName: "Live/ Paused",
      flex: 1,
      align: 'center',
      renderCell: (params) =>
        params.value === 1 ? (<SparkFill />) : params.value === 3 ? (<RightStatus />) : (<SparkOutline />),
    },
    {
      field: "viewApplication",
      headerName: "View Application",
      flex: 0.4,
      renderCell: (params, row) => {
        const onClick = (e) => {
          console.log('params, row: ', params, row);
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
            if(pathname === "/hyperlocal"){
              navigate({
                pathname: `/hyper-applications/${thisRow.id}`,
                search: `?${createSearchParams({
                  name: params.row.brand_name+" "+ params.row.campaign_title
                })}`
              });
            }
            else{
              navigate({
                pathname: `/campaign-applications/${thisRow.id}`,
                search: `?${createSearchParams({
                  name: params.row.brand_name+" "+ params.row.campaign_title
                })}`
              });
            }
            }

        return (
          <IconButton aria-label="fingerprint" onClick={(e) => onClick(e)}>
            <Visibility />
          </IconButton>
        );
      },
    },
    {
      field: "action",
      headerName: "",
      flex: 0.4,
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
            if(pathname === "/hyperlocal"){
              navigate(`/view-hyper/${thisRow.id}`);
            }
            else{
              navigate(`/view-campaign/${thisRow.id}`);
            }
        };

        return (
          <IconButton aria-label="fingerprint" onClick={(e) => onClick(e)}>
            <ActionArrow />
          </IconButton>
        );
      },
    },
    
  ];

  const getAllCampaignListing = () => {
    dispatch(CampaignListing())
      .then((res) => {
        toast.success(res.message);
        setCampaignList(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getAllCampaignListing();
  }, []);

  const handleRedirection = (e) => {
    if(pathname === '/hyperlocal'){
    navigate("/hyper-local-campaign");
    }
    else{
    navigate("/add-campaign");

    }
  };

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

  // console.log(`/edit-campaign/${params.campaignId}`);

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

export default Campaigns;
