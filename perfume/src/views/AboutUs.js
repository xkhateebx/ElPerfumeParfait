import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../App.css';
import { Link, navigate } from '@reach/router';



// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginTop: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
const classes = useStyles();
return (
    <React.Fragment>
    <CssBaseline />
    <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            About Perfumes
            </Typography>
            <img src={`../images/wheel.jpg`}  height="500px" width="500px"/>
            <Typography variant="h5"  color="textSecondary" paragraph>
              Perfume is a liquid that gives people, things and rooms a good smell.
              The odoriferous compounds that make up a perfume can be manufactured synthetically or extracted from plant or animal sources. <br/>
              Each perfume components hold a hirearchy which consists of Top Notes, Middle Notes and Base Notes. <br/>
              The Top notes are what first catches to the nose. The Middle lingers after the perfume settles. <br/>
              And lastly the base notes are what stays after a while. <br />
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to='/products'> Check out our Perfumes</Link>
                </Grid>
                <Grid item>
                <Link to='/'> Go Home</Link>

                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5"  color="textSecondary" paragraph>
        <h1>About Us</h1>
            Le Perfume Parfait is a website for Perfume Connoisseurs and people that just love perfumes! <br/>
            This project was created to 
            make it it easier for people to browse their
            favourite perfumes and find information about its ingredients, 
            manufacturer and where to buy them online. <br/>
            If you ever wondered what's your perfume is made of, then El Perfume Parfait has the answer for you!
            </Typography>
        </Container>
      </main>
      {/* Footer */}
    </React.Fragment>
  );
}
