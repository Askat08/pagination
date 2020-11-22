import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  },
}));

export default function PaginationSquare(props) {
  const classes = useStyles();
  const { handlePageChange, totalPages } = props;
  return (
    <div className={classes.root}>
      <Pagination
        count={totalPages}
        variant='outlined'
        shape='rounded'
        onChange={(event, value) => handlePageChange(event, value)}
      />
    </div>
  );
}
