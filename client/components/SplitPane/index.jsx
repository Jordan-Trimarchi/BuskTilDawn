import React from 'react';

import Container from '@material-ui/core/Container';
import useStyles from '../hooks/useStyles';

const SplitPane = ({ left, right }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.viewWindow}>
      <Container className={classes.pane}>
        {left}
      </Container>
      <Container className={classes.pane2}>
        {right}
      </Container>
    </Container>
  );
};

export default SplitPane;
