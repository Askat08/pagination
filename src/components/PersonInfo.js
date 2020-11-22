import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
  },

  item: {
    width: '200px',
  },
}));

export default function PersonInfo(props) {
  const classes = useStyles();

  const profileBaseUrl = 'http://image.tmdb.org/t/p/w185';
  return (
    <Grid className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={3} noWrap>
          {props.card.known_for.map((card) => (
            <Grid key={card.id} item className={classes.item}>
              <img
                src={`${profileBaseUrl}${card.poster_path}`}
                alt={card.original_title}
                style={{
                  boxShadow:
                    '0 2px 14px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
                }}
              />
              <Typography paragraph variant='overline' color='textPrimary'>
                <strong>Title: </strong>
                {card.original_title}
              </Typography>
              <Typography color='primary' variant='overline'>
                <strong>Date: </strong>
                {card.release_date}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
