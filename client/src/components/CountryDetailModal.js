import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import withStyles from '@mui/material/styles/withStyles';
import StarsIcon from '@mui/icons-material/Stars';
import './CountryDetailModal.css';

class CountryDetailModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, open, closeModal, countryData } = this.props;
        return (
            <Modal
                open={open}
                onClose={closeModal}
            >
                <Card className={"modalContainer"}>
                    <CardHeader
                        title={countryData.name}
                        titleTypographyProps={{
                            variant: "h3",
                            component: "h1"
                        }}
                    />
                    <CardContent>
                        <b>Population: </b><span>{countryData.population}</span>
                        <br />
                        <b>Continent: </b><span>{countryData.continent}</span>
                        {Array.isArray(countryData.cities) ? (
                            <>
                                <h2>Cities</h2>
                                <Grid container>
                                    {countryData.cities.map((c, idx) => {
                                        return (
                                            <Grid item xs={12} sm={8} md={6} lg={4} className={"cityContainer"}>
                                                <Card key={idx} elevation="2">
                                                    <CardContent>
                                                        <h4 className={"cityHeader"}>
                                                            {c.capital ? (<StarsIcon />) : null}
                                                            {c.name}
                                                        </h4>
                                                        <b>Landmarks</b>
                                                        <p>{c.firstLandmark}</p>
                                                        <p>{c.secondLandmark}</p>
                                                        <p>{c.thirdLandmark}</p>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </>
                        ) : null}
                    </CardContent>
                </Card>
            </Modal>
        );
    }
}

/*const styles = theme => ({
    modalContainer: {
        position: 'absolute',
        width: '70%', 
        minHeight: '80%',   
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: 'calc(100vh - 210px)',
        overflowY: 'auto'
    },
    cityHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    cityContainer: {
        padding: '1rem'
    }
});*/

//export default withStyles(styles)(CountryDetailModal);
export default CountryDetailModal;