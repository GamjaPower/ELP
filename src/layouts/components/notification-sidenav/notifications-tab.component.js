import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import styles from './notifications-tab.style';
import scss from './notifications-tab.module.scss';

class NotificationsTab extends Component {
  state = {
    notifications: [{
      id: 1,
      title: 'Message',
      iconClass: 'comment',
      contentTitle: 'Progress Report',
      content: 'Hi, please find attached report...',
      date: moment().subtract(5, 'minutes')
    }, {
      id: 2,
      title: 'Facebook',
      iconClass: 'facebook',
      contentTitle: '',
      content: 'You received a new message',
      date: moment().subtract(10, 'minutes')
    }, {
      id: 3,
      title: 'Slack',
      iconClass: 'slack',
      contentTitle: '#Support',
      content: 'Hi there, got some news...',
      date: moment().subtract(1, 'hour')
    }, {
      id: 4,
      title: 'Twitter',
      iconClass: 'twitter',
      contentTitle: 'Web design trends',
      content: '#web #design',
      date: moment().subtract(2, 'hour')
    }, {
      id: 5,
      title: 'Facebook',
      iconClass: 'facebook',
      contentTitle: '',
      content: 'Hey you!',
      date: moment().subtract(1, 'days')
    }, {
      id: 6,
      title: 'Twitter',
      iconClass: 'twitter',
      contentTitle: 'Feature request',
      content: 'Can you add this',
      date: moment().subtract(1, 'days')
    }]
  }
  render() {
    const {
      classes
    } = this.props;

    return (
      <div className={scss['portal-notifications-wrapper']}>
        <Typography
          variant="title"
          component="h3"
          gutterBottom
        >
          Today
        </Typography>
        {this.state.notifications
          .filter(notification => notification.date.isBetween(moment().subtract(1, 'day'), moment()))
          .map(notification => (
            <Card className={scss['portal-notifications-card']} key={notification.id}>
              <CardHeader
                title={notification.title}
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardTitle,
                  action: classes.cardTime,
                  avatar: classNames([classes.roundedAvatar, classes[notification.iconClass]])
                }}
                avatar={<FontAwesome name={notification.iconClass} />}
                action={<Typography component="span">{moment(notification.date).fromNow()}</Typography>}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="h3"
                >
                  {notification.contentTitle}
                </Typography>
                <Typography component="span">{notification.content}</Typography>
              </CardContent>
            </Card>
          ))
        }
        <Typography
          variant="title"
          component="h3"
          gutterBottom
        >
          Yesterday
        </Typography>
        {this.state.notifications
          .filter(notification => notification.date.isBetween(moment().subtract(2, 'day'), moment().subtract(1, 'day')))
          .map(notification => (
            <Card className={scss['portal-notifications-card']} key={notification.id}>
              <CardHeader
                title={notification.title}
                classes={{
                  root: classes.cardHeader,
                  title: classes.cardTitle,
                  action: classes.cardTime,
                  avatar: classNames([classes.roundedAvatar, classes[notification.iconClass]])
                }}
                avatar={<FontAwesome name={notification.iconClass} />}
                action={<Typography component="span">{moment(notification.date).fromNow()}</Typography>}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  component="h3"
                >
                  {notification.contentTitle}
                </Typography>
                <Typography component="span">{notification.content}</Typography>
              </CardContent>
            </Card>
          ))
        }
      </div>
    );
  }
}

NotificationsTab.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(NotificationsTab);
