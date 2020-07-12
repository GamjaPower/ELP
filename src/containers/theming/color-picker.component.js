import React from 'react';
import PropTypes from 'prop-types';
import { SwatchesPicker } from 'react-color';

import withTheme from '@material-ui/core/styles/withTheme';

import scss from './color-picker.module.scss';

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.color
  };

  handleOpenPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleColorChange = (color) => {
    this.setState({ color: color.hex });
    this.props.onChange(color);
  };

  render() {
    const {
      color
    } = this.state;

    return (
      <div
        className={scss['color-picker-outer']}
        onClick={this.handleOpenPicker}
      >
        <div
          className={scss['color-picker-inner']}
          style={{ background: color }}
        >
          {this.state.displayColorPicker ?
            <SwatchesPicker
              className={scss['color-picker']}
              color={this.state.color}
              onChange={this.handleColorChange}
            />
            : null
          }
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withTheme()(ColorPicker);
