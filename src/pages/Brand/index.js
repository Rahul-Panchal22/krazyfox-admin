import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ActionArrow, SearchIcon, SparkFill, SparkOutline } from "../../svg";
import { useDispatch } from "react-redux";
import { BrandsListing } from "../../actions/brands";
import { toast } from "react-toastify";
import "./Brand.scss";

const Brand = () => {
  const [brandList, setBrandList] = useState([]);
  const [search, setSearched] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const columns = [
    {
      field: "id",
      headerName: "Sr No.",
      flex: 0.5,
    },
    {
      field: "brand_logo_url",
      headerName: "Brand Logo",
      flex: 0.75,
      sortable: false,
      filterable: false,
      renderCell: (params) => <img src={params.value} alt="" />,
    },
    {
      field: "brand_name",
      headerName: "Brand Name",
      flex: 1.5,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "poc_name",
      headerName: "POC Name",
      flex: 1.5,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "poc_phone",
      headerName: "POC Contact",
      flex: 1,
      renderCell: (params) => (params.value ? params.value : "-"),
    },
    {
      field: "categoriesArrayList",
      headerName: "Category",
      flex: 1,
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
      field: "status",
      headerName: "Live/ Paused",
      flex: 0.8,
      align: "center",
      renderCell: (params) =>
        params.value === 1 ? <SparkFill /> : <SparkOutline />,
    },
    {
      field: "action",
      headerName: "",
      align: "right",
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
          navigate(`/view-brand/${thisRow.id}`);
        };

        return (
          <IconButton aria-label="fingerprint" onClick={(e) => onClick(e)}>
            <ActionArrow />
          </IconButton>
        );
      },
    },
  ];

  const getAllBrandListing = () => {
    dispatch(BrandsListing())
      .then((res) => {
        toast.success(res.message);
        setBrandList(res.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    getAllBrandListing();
  }, []);

  const handleRedirection = (e) => {
    navigate("/Add-brand");
  };

  const onMutate = (e, value) => {
    setSearched(value);
  };

  useEffect(() => {
    if (search !== null || search !== "" || search !== undefined) {
      if (search === null) {
        getAllBrandListing();
      } else {
        setBrandList(
          brandList.filter((column) => search.includes(column.brand_name))
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
                options={brandList.map((option) => option.brand_name)}
                onChange={(e, value) => onMutate(e, value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for brand"
                    placeholder=""
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment position="start">
                          {" "}
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button variant="contained" onClick={handleRedirection}>
              + Add New Brand
            </Button>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ height: 632, width: "100%" }}>
        <DataGrid
          rows={brandList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

export default Brand;
