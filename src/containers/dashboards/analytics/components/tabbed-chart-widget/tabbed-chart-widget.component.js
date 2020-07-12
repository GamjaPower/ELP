import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TrandingUpIcon from '@material-ui/icons/TrendingUp';
import TrandingDownIcon from '@material-ui/icons/TrendingDown';

import { Line } from 'react-chartjs-2';

import themeStyles from './tabbed-chart-widget.theme.style';
import scss from './tabbed-chart-widget.module.scss';

const tabs = [{
  title: 'Users',
  value: '2.9K',
  change: 23,
  min: 200,
  max: 2000
}, {
  title: 'Revenue',
  value: '$2,987',
  change: -56,
  min: 1400,
  max: 3000
}, {
  title: 'Conversion Rate',
  value: '0.24%',
  change: 29,
  min: 0,
  max: 100
}, {
  title: 'Sessions',
  value: '5.2K',
  change: 79,
  min: 0,
  max: 6000
}];

const legendOptions = {
  display: false
};

class TabbedChartWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    lineChartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: this.props.theme.palette.primary.main,
        borderWidth: '2',
        pointBackgroundColor: this.props.theme.palette.secondary.main,
        pointBorderColor: this.props.theme.palette.secondary.main,
        lineTension: 0.45,
        data: [650, 590, 800, 810, 1560, 550, 1040]
      }]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true,
        backgroundColor: this.props.theme.palette.primary.main,
        titleFontColor: this.props.theme.palette.common.white,
        bodyFontColor: 'rgba(255,255,255,0.6)',
        xPadding: 20,
        yPadding: 20,
        displayColors: false
      }
    }
  };

  componentWillReceiveProps(props) {
    const oldDataSet = this.state.lineChartData.datasets[0];
    const newDataSet = { ...oldDataSet };
    newDataSet.borderColor = props.theme.palette.primary.main;
    newDataSet.pointBackgroundColor = props.theme.palette.secondary.main;
    newDataSet.pointBorderColor = props.theme.palette.secondary.main;
    const newChartData = {
      ...this.state.lineChartData,
      datasets: [newDataSet]
    };

    const oldTooltipOptions = this.state.lineChartOptions.tooltips;
    const newTooltipOptions = { ...oldTooltipOptions };
    newTooltipOptions.backgroundColor = props.theme.palette.primary.main;
    newTooltipOptions.titleFontColor = props.theme.palette.common.white;
    const newChartOptions = {
      ...this.state.lineChartOptions,
      tooltips: newTooltipOptions
    };
    this.setState({ lineChartData: newChartData, lineChartOptions: newChartOptions });
  }

  changeTab = (event, tabIndex) => {
    const oldDataSet = this.state.lineChartData.datasets[0];
    const newData = [];

    for (let i = 0; i < this.state.lineChartData.labels.length; i += 1) {
      newData.push(Math.floor(Math.random() * tabs[tabIndex].max) + tabs[tabIndex].min);
    }

    const newDataSet = { ...oldDataSet };
    newDataSet.data = newData;
    const newChartData = {
      ...this.state.lineChartData,
      datasets: [newDataSet]
    };

    this.setState({ activeTabIndex: tabIndex, lineChartData: newChartData });
  }

  render() {
    return (
      <div>
        <Tabs
          className={scss['portal-chart-tabs-container']}
          indicatorColor="primary"
          textColor="primary"
          value={this.state.activeTabIndex}
          onChange={this.changeTab}
        >
          {tabs.map(tab => (
            <Tab
              classes={{
                root: scss['portal-chart-tabs-root'],
                wrapper: scss['portal-chart-tabs-wrapper']
              }}
              label={
                <span>
                  <Typography variant="caption" gutterBottom>{tab.title}</Typography>
                  <Typography variant="title">{tab.value}</Typography>
                </span>
              }
              key={tab.title}
              icon={tab.change > 0 ?
                <span className={scss['portal-trend-up']}>
                  <TrandingUpIcon className={scss['portal-trend-icon']} />{tab.change}%
                </span> :
                <span className={scss['portal-trend-down']}>
                  <TrandingDownIcon className={scss['portal-trend-icon']} />{tab.change}%
                </span>}
            />
          ))}
        </Tabs>
        <div className={scss['portal-tab-chart']}>
          <Line
            data={this.state.lineChartData}
            options={this.state.lineChartOptions}
            legend={legendOptions}
          />
        </div>
      </div>
    );
  }
}

TabbedChartWidget.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string
      }),
      common: PropTypes.shape({
        white: PropTypes.string
      })
    })
  }).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TabbedChartWidget);
