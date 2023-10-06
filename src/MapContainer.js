import React from "react";
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
    const [area, setArea] = React.useState('');
    const [locations, setLocations] = React.useState('');
    const cities = Object.keys(evData).slice(0, 3);



    const handleCityChange = (e, value) => {
        setCity(value);
        debugger
        setLocations(getAreas(value))
    }

    const getAreas = (city) => {
        const locations = evData[city].map(area => area.location)
        debugger
        return locations
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
                        value={area}
                        options={locations}
                        renderInput={(params) => <TextField {...params} label="Area" />}
                    />
                </Item>
                <Item>

                    <Button fullWidth variant="contained">Submit</Button>
                </Item>

            </Grid>
            <Grid item md={9} style={{ padding: '3rem' }} >
                <Item> <Map /></Item>
            </Grid>

        </Grid>

    </Box >)


}
export default MapContainer