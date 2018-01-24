import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

import s from './style.scss';

const Home = ({ classes }) => (
  <div className={s['home-page']}>
    <h1 className={s['home-page__title']}>home</h1>
    <article className={s['home-page__description']}>description page</article>
    <Button className={classes.button}>Button Default</Button>
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
