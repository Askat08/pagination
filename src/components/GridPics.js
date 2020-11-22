import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleModal from './Modal';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
  img: {
    width: '100%',
    height: '100%',
    boxSizing: 'border- box',
  },
}));

export default function GridPics(props) {
  const { isLoading } = props;
  const classes = useStyles();

  const profileBaseUrl = 'http://image.tmdb.org/t/p/w185';
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={3}>
          {props.data.map((card) => (
            <Grid key={card.id} item>
              {isLoading ? (
                <>
                  <Skeleton
                    variant='rect'
                    width={210}
                    height={250}
                    animation='wave'
                  />
                  <Skeleton animation='wave' height={50} />
                </>
              ) : (
                <>
                  <div className='movie-pic box'>
                    <img
                      className={classes.img}
                      src={`${profileBaseUrl}${card.profile_path}`}
                      alt={card.title}
                    />
                  </div>
                  <SimpleModal card={card} />
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
