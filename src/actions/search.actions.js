import axios from 'axios';

export const GET_SEARCH_DATA_SUCCESS = '(SEARCH) GET_SEARCH_DATA_SUCCESS';
export const GET_SEARCH_DATA_FAIL = '(SEARCH) GET_SEARCH_DATA_FAIL';
export const GET_SEARCH_DATA_LOADING = '(SEARCH) GET_SEARCH_DATA_LOADING';

export const GET_JOBLIST_SUCCESS = '(SEARCH) GET_JOBLIST_SUCCESS';
export const GET_JOBLIST_FAIL = '(SEARCH) GET_JOBLIST_FAIL';

export const GET_INDEXLIST_SUCCESS = '(SEARCH) GET_INDEXLIST_SUCCESS';
export const GET_INDEXLIST_FAIL = '(SEARCH) GET_INDEXLIST_FAIL';

export const POST_JOB_SUCCESS = '(SEARCH) POST_JOB_SUCCESS';
export const POST_JOB_FAIL = '(SEARCH) POST_JOB_FAIL';

export const PUT_JOB_SUCCESS = '(SEARCH) PUT_JOB_SUCCESS';
export const PUT_JOB_FAIL = '(SEARCH) PUT_JOB_FAIL';

export const DELETE_JOB_SUCCESS = '(SEARCH) DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAIL = '(SEARCH) DELETE_JOB_FAIL';

const AUTHORIZATION = 'Basic '


export const deletePhantomJob = (phantomJob) => (dispatch, getState) => {

  // let post_data = {'job':phantomJob};

  let apiUrl = 'http://'+window.location.hostname+':7080/api/phantom/job'  ; 
 

  let post_data = {
    headers: {
      Authorization: AUTHORIZATION
    },
    data: {
      job: phantomJob
    }
  };
  axios.delete(apiUrl, post_data)
    .then( response => { 
      dispatch({
        type: GET_JOBLIST_SUCCESS,
        payload: {result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      dispatch({
        type: GET_JOBLIST_FAIL,
        payload: {result: []}
      });    

    });

};

export const postPhantomJob = (phantomJob) => (dispatch, getState) => {

  let post_data = {'job':phantomJob};
  
  let apiUrl = 'http://'+window.location.hostname+':7080/api/phantom/job'  ; 
  
  let headers = {
    headers: {
      Authorization: AUTHORIZATION
    }
  }
  axios.post(apiUrl, post_data, headers)
    .then( response => { 
      dispatch({
        type: GET_JOBLIST_SUCCESS,
        payload: {result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      dispatch({
        type: GET_JOBLIST_FAIL,
        payload: {result: []}
      });    

    });

};


export const putPhantomJob = (phantomJob) => (dispatch, getState) => {

  let post_data = {'job':phantomJob};
  
  let apiUrl = 'http://'+window.location.hostname+':7080/api/phantom/job'  ; 
  
  let headers = {
    headers: {
      Authorization: AUTHORIZATION
    }
  }
  axios.put(apiUrl, post_data, headers)
    .then( response => { 
      dispatch({
        type: GET_JOBLIST_SUCCESS,
        payload: {result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      dispatch({
        type: GET_JOBLIST_FAIL,
        payload: {result: []}
      });    

    });

};



export const getIndexList = () => (dispatch, getState) => {

  // let post_data = {};
  
  let apiUrl = 'http://'+window.location.hostname+':7080/api/els/indexlist' ; 
  
  // let headers = {
  //   headers: {
  //     Authorization: AUTHORIZATION
  //   }
  // }

  let post_data = {
    headers: {
      Authorization: AUTHORIZATION
    }
  };

  axios.get(apiUrl, post_data)
    .then( response => { 
      //console.log(response);
      dispatch({
        type: GET_INDEXLIST_SUCCESS,
        payload: {result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      // console.log(error);
      dispatch({
        type: GET_INDEXLIST_FAIL,
        payload: {result: []}
      });    

    });

};

export const getPhantomJobList = (sensitivity) => (dispatch, getState) => {

  let post_data = {'sensitivity':sensitivity};
  
  let apiUrl = 'http://'+window.location.hostname+':7080/api/phantom/joblist'  ; 
  
  let headers = {
    headers: {
      Authorization: AUTHORIZATION
    }
  }
  axios.post(apiUrl, post_data, headers)
    .then( response => { 
      //console.log(response);
      dispatch({
        type: GET_JOBLIST_SUCCESS,
        payload: {result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      // console.log(error);
      dispatch({
        type: GET_JOBLIST_FAIL,
        payload: {result: []}
      });    

    });

};

export const getSearchData = (query, offset, limit, utc_minute) => (dispatch, getState) => {

  let post_data = {'spl':query, 'meta':{'offset':offset, 'limit':limit, 'utc_minute': utc_minute}};
  console.log(post_data)
  let apiUrl = 'http://'+window.location.hostname+':7080/api/els/search'  ; 
  
  let headers = {
    headers: {
      Authorization: AUTHORIZATION
    }
  }; 

  dispatch({
    type: GET_SEARCH_DATA_LOADING,
    payload: {query:query, result: []}
  });    

  axios.post(apiUrl, post_data, headers)
    .then( response => {       
      dispatch({
        type: GET_SEARCH_DATA_SUCCESS,
        payload: {query:query, result: response.data||[]}
      });    
    })
    .catch( function (error)  { 
      dispatch({
        type: GET_SEARCH_DATA_FAIL,
        payload: {query:query, result: error||[]}
      });    

    });


};


