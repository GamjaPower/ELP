import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';

import backlogData from '../../../../../assets/data/dashboards/backlog.json';

import themeStyles from './backlog-widget.theme.style';


class BacklogWidget extends React.Component {
  state = {
    data: backlogData,
    selected: []
  };

  onSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(item => item.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;


  render() {
    const { data, selected } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-backlog-widget']}>
        <CardContent className={classes['portal-backlog-widget__table']}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < data.length}
                    checked={selected.length === data.length}
                    onChange={(event, checked) => this.onSelectAllClick(event, checked)}
                  />
                </TableCell>
                <TableCell className={classes['table-cell']}>Issue Name</TableCell>
                <TableCell className={classes['table-cell']} numeric>Estimated time</TableCell>
                <TableCell className={classes['table-cell']} numeric>Status</TableCell>
                <TableCell className={classes['table-cell']} numeric>Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => {
                const isSelected = this.isSelected(item.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, item.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={item.id}
                    selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    <TableCell className={classes['table-cell']}>{item.name}</TableCell>
                    <TableCell className={classes['table-cell']} numeric>{item.time}</TableCell>
                    <TableCell className={classes['table-cell']} numeric>{item.status}</TableCell>
                    <TableCell className={classes['table-cell']} numeric>{item.priority}</TableCell>
                  </TableRow>);
                })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

BacklogWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(BacklogWidget);
