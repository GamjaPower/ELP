import {
  GET_SEARCH_DATA_SUCCESS,
  GET_SEARCH_DATA_FAIL,
  GET_SEARCH_DATA_LOADING,
  GET_JOBLIST_SUCCESS, 
  GET_JOBLIST_FAIL,
  POST_JOB_SUCCESS, 
  POST_JOB_FAIL,
  DELETE_JOB_SUCCESS, 
  DELETE_JOB_FAIL,
  GET_INDEXLIST_SUCCESS,
  GET_INDEXLIST_FAIL
} from '../actions/search.actions';

const searchReducer = (state = {}, action) => {

  switch (action.type) {
    case GET_SEARCH_DATA_SUCCESS:
      let data = action.payload.result.data || [];
      // console.log(data);
      return Object.assign({}, state, {query: action.payload.query, 
        headers: data[0], 
        datalist: data[1], 
        total: data[2]['total'], 
        offset: data[2]['offset'], 
        limit: data[2]['limit'], 
        utc_minute: data[2]['utc_minute'], 
        last_command: data[2]['last_command'],
        meta: data[2],
        msg: action.payload.result.msg, 
        loading: false});
    case GET_SEARCH_DATA_LOADING:
      return Object.assign({}, state, {query: action.payload.query, 
        datalist: [], 
        loading: true});
    case GET_SEARCH_DATA_FAIL:
        return Object.assign({}, state, {query: action.payload.query,
        msg: action.payload.result.stack, 
        loading: false});
    case POST_JOB_SUCCESS:
      return Object.assign({}, state, action.payload);
    case POST_JOB_FAIL:
      return Object.assign({}, state, action.payload);      
    case DELETE_JOB_SUCCESS:
      return Object.assign({}, state, action.payload);
    case DELETE_JOB_FAIL:
      return Object.assign({}, state, action.payload);      
    case GET_JOBLIST_SUCCESS:
      let joblist = action.payload.result.data || [];
      return Object.assign({}, state, {joblist: joblist, msg: action.payload.result.msg });
    case GET_JOBLIST_FAIL:
        return Object.assign({}, state, action.payload);
    case GET_INDEXLIST_SUCCESS:
      let result = action.payload.result || [];
      return Object.assign({}, state, {indexes: result.data.indexes, aliases: result.data.aliases, cluster: result.data.cluster, msg: result.msg });
    case GET_INDEXLIST_FAIL:
        return Object.assign({}, state, action.payload);
    default:
      return state;
  }

};

export default searchReducer;
