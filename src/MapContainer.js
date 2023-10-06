import React, { useEffect } from "react";
import Map from "./Map";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Autocomplete from '@mui/material/Autocomplete';
import * as evData from './testData.json'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const MapContainer = () => {


    const [city, setCity] = React.useState('pune');
    const [locations, setLocations] = React.useState('Wakad');
    const cities = Object.keys(evData).slice(0, 3);
    const [map_locator, set_map_locator] = React.useState({
        location: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
        address: '1600 Amphitheatre Parkway, Mountain View, california.'
    });



    const handleCityChange = (e, value) => {
        setCity(value);
    }


    const handleLocationChange = (e, value) => {
        setLocations(value);
    }

    const getAreas = (selectedLocation) => {
        const locat = evData[city].filter(area => area.location == selectedLocation)
        return locat[0]
    }

    const getlatLong = (selectedCity) => {
        return evData[selectedCity].filter(area => area.address === locations)[0]
    }


    const handleSubmit = () => {
        set_map_locator(getlatLong(city))
    }

    return (<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>

            <Grid item style={{ marginTop: 200 }} md={3}>
                <Item >Welcome to EV Charging stations
                </Item>
                <Item > <Autocomplete
                    disablePortal
                    id="city"
                    placeholder="Select City"
                    onInputChange={handleCityChange}
                    value={city}
                    options={cities}
                    renderInput={(params) => <TextField {...params} label="City" />}
                />
                </Item>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="area"
                        placeholder="Select Area"
                        onInputChange={handleLocationChange}
                        value={locations}
                        options={evData[city].map(area => area.address)}
                        renderInput={(params) => <TextField {...params} label="Area" />}
                    />
                </Item>
                <Item>

                    <Button fullWidth variant="contained" onClick={handleSubmit}>Submit</Button>
                </Item>

            </Grid>
            <Grid item md={9} style={{ padding: '3rem' }} >
                <Item> <Map location={map_locator} /></Item>
            </Grid>

        </Grid>

    </Box >)


}
export default MapContainer