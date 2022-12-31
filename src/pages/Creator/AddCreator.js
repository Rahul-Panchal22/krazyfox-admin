import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Stack from '@mui/material/Stack';
import { SearchIcon } from "../../svg";

const columns = [
  {
    field: "id",
    headerName: "Sr No.",
    minWidth: 60,
  },
  {
    field: "creator_name",
    headerName: "Creator Name",
    minWidth: 220,
    sortable: false,
    filterable: false,
  },
  {
    field: "followers",
    headerName: "Followers",
    minWidth: 120,
  },
  {
    field: "state",
    headerName: "State",
    minWidth: 180,
  },
  {
    field: "contact",
    headerName: "Contact",
    minWidth: 180,
  },
  {
    field: "category",
    headerName: "Category",
    minWidth: 110,
  },
];

const rows = [
  { id: 1, creator_name: 'Johny Depp', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 2, creator_name: 'Cersei', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 3, creator_name: 'Jaime', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 4, creator_name: 'Arya', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 5, creator_name: 'Daenerys', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 6, creator_name: 'Bhautik', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 7, creator_name: 'Ferrara', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 8, creator_name: 'Rossini', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 9, creator_name: 'Harvey', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 10, creator_name: 'Daenerys', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 11, creator_name: 'Rahul', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 12, creator_name: 'Ferrara', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 13, creator_name: 'Rossini', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
  { id: 14, creator_name: 'Harvey', followers: '3.5M', state: 'Maharashtra', contact: '+91 0000000000', category: 'Beauty' },
];

const AddCreator = () => {
  
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                renderInput={(params) => <TextField
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
                />}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="filled" sx={{ m: 1, maxWidth: 400 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                size='small'
              >
                <MenuItem value="">
                  <em>Category</em>
                </MenuItem>
                <MenuItem value={1}>Fashion</MenuItem>
                <MenuItem value={2}>Beauty</MenuItem>
                <MenuItem value={3}>Acting</MenuItem>
              </Select>
            </FormControl>
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
          <Stack direction="row" spacing={2} className="filter-row">
            <Button variant="contained" className="filter-btn active">C1 (3K-10K)</Button>
            <Button variant="contained" className="filter-btn">C2(10K-30K)</Button>
            <Button variant="contained" className="filter-btn">C3 (30K- 150/200K)</Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack direction="row" spacing={2}>
            <InputLabel id="demo-simple-select-label" className='extra-label mar-top-8'>Follower Range</InputLabel>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              size='small'
              sx={{ width: 140 }}
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              size='small'
              sx={{ width: 140 }}
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="to" />}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ height: 632, width: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
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
  { title: 'The Lord of the Rings: The Return of the King', year: 2003, },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002, },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977, },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964, },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983, },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004, },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];


export default AddCreator;
