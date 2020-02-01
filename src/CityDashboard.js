import React from 'react';
import './CityDashboard.css';
import vodaImg from './voda.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardHeader } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    backgroundColor: "#ccccaa",
    padding: "5px",
  },
  card: {
    height: "100%",
    width: "100%",
  },
  cardWrapper: {
    margin: '5px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'yellow',
    margin: '5px',
    padding: '5px',
  }
});



function CityDashboard() {
  const classes = useStyles();

  const items = [];
  items.push(
    <Box className={classes.cardWrapper} key={'title'}>
    <Card className={classes.card}>
      <CardHeader title="Smart.Pacov.city" subheader="Přehled základních praktických údajů, které byste mohli potřebovat"/>
      <CardContent>
      </CardContent>
    </Card>
    </Box>

  )

  for (let i = 0; i < 20; i++) {
    let grow=Math.random()>0.5?2:1
    items.push((
      <Box className={classes.cardWrapper} key={i}>
        <Card  className={classes.card}>
          <CardHeader title={`Vodné/stočné ${i+1}`} subheader="cena"/>
          <CardContent>
          Pacov: 97 Kč
          </CardContent>
        </Card>
      </Box>
    ))
  }

  return (
    <div className="CityDashboard">

      <Box flexWrap="wrap" display="flex" 
           flexDirection="row" className={classes.container} 
           justifyContent="space-between" alignItems="stretch">
        {items}
      </Box>


    </div>
  );
}

export default CityDashboard;
