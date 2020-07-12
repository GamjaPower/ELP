import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import themeStyles from './phantom-categories.theme.style';

const Categories = (props) => {
  const {
    classes,
    selectedCategory,
    categories,
    onSelect
  } = props;

  return (
    <Drawer
      variant="persistent"
      classes={{
        paper: classes.categoryListPaper,
        docked: classes.fullHeight
      }}
      anchor="left"
      open
    >
      <div className={classes.drawerInner}>
        <List component="nav" className={classNames(classes.list, classes['portal-category-list'])}>
          {categories.map(cat => (
            <ListItem
              className={classNames(
                classes['portal-category-list__item'],
                cat === selectedCategory ? classes['portal-category-list__item--active'] : ''
              )}
              title={cat.name}
              key={cat.name}
              button
              disableGutters
              onClick={onSelect(cat)}
            >
              <span className={classes.listIcon}>{cat.icon}</span>
              <Typography
                variant="button"
                color="inherit"
                className={classes['portal-category-list__item__text']}
              >
                {cat.name}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

Categories.defaultProps = {
  selectedCategory: null
};

Categories.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedCategory: PropTypes.shape({}),
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(themeStyles, { withTheme: true })(Categories);
