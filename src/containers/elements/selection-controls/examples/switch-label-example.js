import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: false
  };

  render() {
    return (
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={(event, checked) => this.setState({ checkedA: checked })}
            />
          }
          label="A"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedB}
              onChange={(event, checked) => this.setState({ checkedB: checked })}
            />
          }
          label="B"
        />
        <FormControlLabel control={<Switch />} disabled label="C" />
      </FormGroup>
    );
  }
}

export default SwitchLabels;
