import React from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import CloudCircle from '@material-ui/icons/Lens';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from "material-ui-flat-pagination";
import Button from '@material-ui/core/Button';
import AceEditor from "react-ace";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-github";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { getSearchData } from '../../../../../actions/search.actions';
import { getIndexList } from '../../../../../actions/search.actions';

import scss from './result-widget.module.scss';



const styles = {

  root: {
    background: 'white',
    // position: '-webkit-sticky',
    position: 'sticky',
    top: 20,
    bottom: 20, 
    paddingTop: '40px',
    paddingBottom: '40px',
    zIndex: 5,
},
  textfield: {
  },  
  editor: {
    borderRadius: 3,
    lineHeight: 1.8,    
  },
  
};




const theme = createMuiTheme({
  overrides: {

    MuiTable: { 
      root: { 
        // display: 'block',
        // overflowX: 'auto',
        // transform: 'rotateX(180deg)' 
        // whiteSpace: 'nowrap'
      }

    },

    MuiTableRow: { 
      root: { 
        height: 30, 
        fontFamily: "Helvetica",
        
        
      }, 
      head: { 
        height: 40, 
      }
    },
    MuiTableCell: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        "&:last-child": {
          paddingRight: 0
        }        
      },
      head: { 
        color: '#3c444d', 
        backgroundColor: '#e1e6eb',
        fontSize: 14,
        fontFamily: "Helvetica",
      }

    }
  }
});


class LoadingView extends React.Component {
  render () {
    return ( 
    <div className={scss['progress']}>
      <div className={scss['progress-item']}>
        <CircularProgress size={80}/>
      </div>
    </div>
    );
  }

}

const chart_options = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legend: { 
    display: true,
    position: 'right', 
    // onHover: function(event, legendItem) {
    //   var options = this.options || {};
    //   var hoverOptions = options.hover || {};
    //   var ci = this.chart;
    //   var hoveredDatasetIndex = legendItem.datasetIndex;
    //   // console.log(ci.legend.legendItems);
    //   ci.legend.legendItems.map((item, key) => ci.updateHoverStyle(ci.getDatasetMeta(item.datasetIndex).data, null, false) );
    //   ci.updateHoverStyle(ci.getDatasetMeta(hoveredDatasetIndex).data, hoverOptions.mode, true);
    //   ci.render();
    // },
  },
  // legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  scales: {
        xAxes: [{
            type: 'time',
            time: {
              parser: 'x',
              unit: 'day'
            }
        }]
      }
}




class ChartView extends React.Component {
  render () {

    chart_options.scales.xAxes[0].time.unit = this.props.meta.timeunit;
    return ( 
    <div>
      <Paper>
      <Line 
          data={this.props.meta.chartdata}
          height={100}
          options={chart_options} />
      </Paper>
    </div>
    );
  }

}

class ResultView extends React.Component {
  render () { 

    return ( 
      <div>
      <MuiThemeProvider theme={theme}>
      <Paper>
      <Pagination
          limit={this.props.limit}
          offset={this.props.offset}
          total={this.props.total}
          centerRipple={true}
          onClick={(e, offset) => this.props.handleChangeOffset(offset)}
        />
      </Paper>  
      
  
      
      <Table >
        <TableHead className={scss['fixed_header']}>
          <TableRow key='tablerow'>
            {this.props.headers.map( (cell, cellKey) => (
            <TableCell key={cellKey}>{cell}</TableCell>
            ))} 
          </TableRow>
        </TableHead>
        <TableBody >
          {this.props.datalist.map( (item, rowKey) => ( 
            <TableRow key={rowKey} >
              {item.map( (cell, cellKey) => (
              <TableCell key={cellKey}>{cell}</TableCell>
              ))} 
            </TableRow>
          )) }
        </TableBody>
      </Table>


      </MuiThemeProvider>    
      </div>
      );
  }  
}


class IntroView extends React.Component {
  render () { 
    return ( 
      <div>
        
        <Typography variant="subheading" className={scss['indexlistheading']}>
              Elasticsearch
        </Typography>

        <Paper>
        <Table className={scss['cluster']} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cluster Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Number of nodes</TableCell>
              <TableCell align="center">Number of data nodes</TableCell>
              <TableCell align="center">Active shards</TableCell>
              <TableCell align="center">Active primary shards</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
                {this.props.cluster.cluster_name}
              </TableCell>
              <TableCell align="right"><CloudCircle style={{ fill: this.props.cluster.status }}/></TableCell>
              <TableCell align="right">{this.props.cluster.number_of_nodes}</TableCell>
              <TableCell align="right">{this.props.cluster.number_of_data_nodes}</TableCell>
              <TableCell align="right">{this.props.cluster.active_shards}</TableCell>
              <TableCell align="right">{this.props.cluster.active_primary_shards}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </Paper>

  

        
        <Typography variant="subheading" className={scss['indexlistheading']}>
        detection scenario
        </Typography>
        
        <Typography variant="subheading" className={scss['indexlistheading']}>
          Alias List
        </Typography>
        <div className={scss['indexlist']}>
        {this.props.aliases.map((index,key) => (
          <Button variant="contained" 
            onClick={this.props.updateAceEditor({index})}
            className={scss['indexlistbutton']} key={key}>{index.name}</Button>
        ))}
        </div>      
        <Typography variant="subheading" className={scss['indexlistheading']}>
          Index List
        </Typography>
        <div className={scss['indexlist']}>
        {this.props.indexes.map((index,key) => (
          <Button variant="contained" 
            onClick={this.props.updateAceEditor({index})}
            className={scss['indexlistbutton']} key={key}>{index.name}</Button>
        ))}
        </div>

      </div>
      );
  }  
}

class ErrorView extends React.Component {
  render () { 
    return ( 
    <div>{this.props.msg}</div>
      );
  }  
}



class ResultWidget extends React.Component {
  state = {
    offset: 0,
    limit: 20,
    query: '',
    loading: false
  };

  handleChangeOffset = (offset) => {
    this.setState({ offset: offset });
    this.props.getSearchData(this.refs.ace.editor.getValue(), offset, this.state.limit, this.props.utc_minute);
  };
 
  
  componentWillMount() {
    this.props.getIndexList(); 
  }

  updateAceEditor= index => () => {
    let spl = "tstats c from " + index.index.name + " " ;
    this.refs.ace.editor.setValue(spl);
    this.refs.ace.editor.focus();
    this.refs.ace.editor.gotoLine(1,spl.length);
  }

  onScroll = () =>  {

    console.log('scroll');
  }

  getEql = query => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                    let [key, value] = param.split('=');
                    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                    return params;
                }, {}
            )
        : {}
  };  

  
  autoformat = query => {
    this.refs.ace.editor.reformatSearch();
  }

  searchData = e => { 
    
    this.props.getSearchData(e.getValue(), 0, this.state.limit, '');
    this.setState({ offset: 0 });
  }


  render() {
    const { classes } = this.props;

    let q = ''
    
    if( this.props.location !== undefined && this.props.location.search !== undefined ) { 
      let query = this.getEql(this.props.location.search)['query'];
      
      if( query !== undefined && this.props.query.length === 0 ) { 
        q = query;
      } else { 
        q = this.props.query;
      }
    }
    
    // console.log(this.props);
    
    
    

    let bodyView;
    if (this.props.loading) { 
      bodyView = <LoadingView/>
    } else if ( this.props.datalist.length > 0 ) { 
      if( this.props.last_command === 'timechart' ) { 
        bodyView = <ChartView
                  meta={this.props.meta}
                  />
      } else { 
        bodyView = <ResultView
                  datalist={this.props.datalist}
                  offset={this.state.offset}
                  limit={this.state.limit}
                  total={this.props.total}
                  classes={classes}
                  handleChangeOffset={this.handleChangeOffset}
                  headers={this.props.headers}
                  /> 
      }
      
    } else if ( this.props.msg.length > 0 ) { 
      bodyView = <ErrorView msg={this.props.msg}/>
    } else { 
      bodyView = <IntroView
                  cluster={this.props.cluster}
                  aliases={this.props.aliases}
                  indexes={this.props.indexes}
                  updateAceEditor={this.updateAceEditor}
                  />
    }
    

    return (
      

 
  
      <div>
        <div>
        <Paper style={{}}>
        <AceEditor
          className={classes.editor}
          focus={true} 
          mode="sql"
          theme="spl-dark"
          name="UNIQUE_ID_OF_DIV"
          width="100%"
          height="150px"
          //highlightActiveLine={true}
          editorProps={{ $blockScrolling: true }}
          value={q}
          // value="timechart c from appctrl by src span='1d'"
          ref="ace"
          showLineNumbers = {true}
          commands={[{   // commands is array of key bindings.
            name: 'search', //name for the key binding.
            bindKey: {win: 'Enter', mac: 'Enter'}, //key combination used for the command.
            exec: (e) => { this.searchData(e)} //function to execute when keys are pressed.
          }]}
  
        />     
             
        
        </Paper>  
        </div>
        <div>
        {bodyView}
        </div>
        


          
      </div> 

    );
  }
}




let mapStateToProps = (state) => {
  return {
    datalist: state.search.datalist || [],
    total: state.search.total || 0,
    indexes: state.search.indexes || [],
    cluster: state.search.cluster || [],
    aliases: state.search.aliases || [],
    headers: state.search.headers || [],
    msg: state.search.msg || '', 
    meta: state.search.meta || {}, 
    query: state.search.query || '', 
    last_command: state.search.last_command || '', 
    utc_minute: state.search.utc_minute || '', 
    loading: state.search.loading || false
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
      getSearchData: (query, offset, limit, utc_minute) => dispatch(getSearchData(query, offset, limit, utc_minute)),
      getIndexList: (query) => dispatch(getIndexList(query))
  };
}

ResultWidget = connect(mapStateToProps, mapDispatchToProps)(ResultWidget);

ResultWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ResultWidget);
