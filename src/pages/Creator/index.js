import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { KycStatus } from "../../svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreatorsListing } from "../../actions/creators";

const Creator = () => {
  const [creatorsList, setCreatorsList] = useState([]);
  const [search, setSearched] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMutate = (e, value) => {
    setSearched(value);
  };

  const getAllCreatorsListing = () => {
    dispatch(CreatorsListing())
      .then((res) => {
        console.log("response -----> ", res.data);
        if (res.code === 200) {
          toast.success("Creators Listing fetch successfully");
          setCreatorsList(res.data);
        }
      })
      .catch((err) => {
        toast.success(err);
      });
  };

  useEffect(() => {
    getAllCreatorsListing();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Sr No.",
      minWidth: 60,
    },
    {
      field: "name",
      headerName: "Creator Name",
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "campaign_followers_range",
      headerName: "Followers",
      minWidth: 120,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "address",
      headerName: "State",
      minWidth: 180,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "phone_number",
      headerName: "Contact",
      minWidth: 180,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "categoriesArrayList",
      headerName: "Category",
      minWidth: 110,
      renderCell: (params) => {
        const value = params.value;
        return (
          <Chip
            label={`${value.length > 0 ? value[0].name : "Not Data"}`}
            variant="outlined"
          />
        );
      },
    },
    {
      field: "kyc_status",
      headerName: "KYC",
      minWidth: 120,
      renderCell: (params) => {
        if (params.value === null || params.value === "0") {
          return (
            <Stack direction="row" spacing={2}>
              <KycStatus svgFill="red" />
            </Stack>
          );
        } else {
          return (
            <Stack direction="row" spacing={2}>
              <KycStatus svgFill="green" />
            </Stack>
          );
        }
      },
      // console.log("params", params.value)
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

          navigate(`/view-creator/${thisRow.id}`);
        };

        return (
          <IconButton aria-label="fingerprint" onClick={(e) => onClick(e)}>
            <VisibilityIcon />
          </IconButton>
        );
      },
    },
  ];

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getAllCreatorsListing();
      } else {
        setCreatorsList(
          creatorsList.filter((column) => search.includes(column.name))
        );
      }
    }
  }, [search]);

  // console.log(campaignList);
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
          <Grid item xs={12}>
            <Stack spacing={2} sx={{ width: 630 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                size="small"
                options={creatorsList.map((option) => option.name)}
                onChange={(e, value) => onMutate(e, value)}
                renderInput={(params) => (
                  <TextField {...params} label="Search for creators" />
                )}
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "auto" }}>
        <DataGrid
          rows={creatorsList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </>
  );
};

export default Creator;
