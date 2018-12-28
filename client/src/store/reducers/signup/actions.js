import axios from 'axios';

import { actionTypes } from '../actionTypes';
import { api_url } from '../../../constants';

axios.defaults.baseURL = api_url;

export const signupRequest = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGNUP_REQUEST,
            payload:  {
                request: true,
            }
        });
        axios({
            method: 'post',
            url: '/account',
            data: data,
        })
            .then(res => {
                dispatch({
                    type: actionTypes.SIGNUP_SUCCESS,
                    payload: {
                        request: false,
                        _id: res.data
                    }
                });
            })
            .catch(res => {
                dispatch({
                    type: actionTypes.SIGNUP_FAIL,
                    payload: {
                        request: false,
                        error_message: 'err'
                    },
                });
            })
    }
};
