/*eslint no-useless-escape: 0*/
export default `import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  checked: {
    color: green[500]
  }
};

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedF: true,
    checkedG: true
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Option A"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
            />
          }
          label="Option B"
        />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Option C" />
        <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
        <FormControlLabel
          disabled
          control={<Checkbox checked value="checkedE" />}
          label="Disabled"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedF}
              onChange={this.handleChange('checkedF')}
              value="checkedF"
              indeterminate
            />
          }
          label="Indeterminate"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedG}
              onChange={this.handleChange('checkedG')}
              classes={{
                checked: classes.checked
              }}
              value="checkedG"
            />
          }
          label="Custom color"
        />
      </FormGroup>
    );
  }
}

Checkboxes.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Checkboxes);
`;
