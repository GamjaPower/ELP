import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Bar } from 'react-chartjs-2';
import CountUp from 'react-countup';
import classNames from 'classnames';

import themeStyles from './active-users-widget.theme.style';

const legendOptions = {
  display: false
};

class ActiveUsersWidget extends React.Component {
  state = {
    intervalId: null,
    userChartData: {
      labels: [
        '1 min ago', '2 min ago', '3 min ago', '4 min ago', '5 min ago', '6 min ago', '7 min ago', '8 min ago',
        '9 min ago', '10 min ago', '11 min ago', '12 min ago', '13 min ago', '14 min ago', '15 min ago'
      ],
      datasets: [{
        label: 'Page views',
        data: [15, 24, 34, 66, 88, 69, 44, 34, 73, 99, 66, 42, 57, 58, 90],
        borderWidth: 0,
        backgroundColor: this.props.theme.palette.primary.light,
        hoverBackgroundColor: this.props.theme.palette.primary.light
      }]
    },
    userChartOptions: {
      animation: false,
      scaleShowVerticalLines: false,
      responsive: true,
      tooltips: {
        enabled: true,
        backgroundColor: this.props.theme.palette.common.white,
        titleFontColor: this.props.theme.palette.primary.dark,
        bodyFontColor: this.props.theme.palette.primary.dark,
        xPadding: 20,
        yPadding: 20,
        displayColors: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  };

  componentWillMount() {
    const intervalId = setInterval(() => {
      const oldDataSet = this.state.userChartData.datasets[0];
      const newData = [...oldDataSet.data];

      newData.push(Math.floor((Math.random() * 100) + 1));
      newData.splice(0, 1);

      const newDataSet = { ...oldDataSet };
      newDataSet.data = newData;
      const newChartData = {
        ...this.state.userChartData,
        datasets: [newDataSet]
      };

      this.setState({ userChartData: newChartData });
    }, 3000);

    this.setState({ intervalId });
  }

  componentWillReceiveProps(props) {
    const oldDataSet = this.state.userChartData.datasets[0];
    const newDataSet = { ...oldDataSet };
    newDataSet.hoverBackgroundColor = props.theme.palette.primary.light;
    newDataSet.backgroundColor = props.theme.palette.primary.light;
    const newChartData = {
      ...this.state.userChartData,
      datasets: [newDataSet]
    };

    const oldTooltipOptions = this.state.userChartOptions.tooltips;
    const newTooltipOptions = { ...oldTooltipOptions };
    newTooltipOptions.backgroundColor = props.theme.palette.common.white;
    newTooltipOptions.titleFontColor = props.theme.palette.primary.dark;
    newTooltipOptions.bodyFontColor = props.theme.palette.primary.dark;
    const newChartOptions = {
      ...this.state.userChartOptions,
      tooltips: newTooltipOptions
    };
    this.setState({ userChartData: newChartData, userChartOptions: newChartOptions });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes['portal-active-users-widget']}>
        <div>
          <Typography variant="body2" className={classes['portal-text-contrast']}>
            Active users right now
          </Typography>
          <Typography
            variant="display3"
            className={classNames(
              classes['portal-text-contrast'],
              classes['portal-active-users-widget__countup']
            )}
          >
            <CountUp
              start={this.state.userChartData.datasets[0].data[13]}
              end={this.state.userChartData.datasets[0].data[14]}
            />
          </Typography>
          <Typography
            variant="caption"
            className={classNames(
              classes['portal-text-contrast'],
              classes['portal-active-users-widget__legend']
            )}
          >
            Page views per minute
          </Typography>
        </div>
        <div>
          <Bar
            data={this.state.userChartData}
            options={this.state.userChartOptions}
            legend={legendOptions}
          />
        </div>
      </div>
    );
  }
}

ActiveUsersWidget.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        dark: PropTypes.string,
        main: PropTypes.string,
        light: PropTypes.string,
        contrastText: PropTypes.string
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string
      }),
      common: PropTypes.shape({
        white: PropTypes.string
      })
    })
  }).isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(ActiveUsersWidget);
