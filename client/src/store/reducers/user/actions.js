import axios from 'axios';

import { actionTypes } from './actionTypes';
import { api_url } from '../../../constants';

axios.defaults.baseURL = api_url;

export const userRequest = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.USER_REQUEST,
            payload: {
                request: true,
            }
        });
        axios({
            method: 'get',
            url: '/account/' + data,
        })
            .then(res => {
                if (res.data.uuid) {
                    dispatch({
                        type: actionTypes.USER_SUCCESS,
                        payload: {
                            request: false,
                            _id: res.data.uuid,
                            email: res.data.email,
                        }
                    });
                } else {
                    dispatch({
                        type: actionTypes.USER_FAIL,
                        payload: {
                            request: false,
                            error_message: 'err'
                        },
                    });
                }
            })
            .catch(res => {
                dispatch({
                    type: actionTypes.USER_FAIL,
                    payload: {
                        request: false,
                        error_message: 'err'
                    },
                });
            })
    }
}