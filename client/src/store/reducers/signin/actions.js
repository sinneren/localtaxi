import axios from 'axios';

import { actionTypes } from './actionTypes';
import { api_url } from '../../../constants';

axios.defaults.baseURL = api_url;

export const formRequest = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGNIN_REQUEST,
            payload:  {
                request: true,
            }
        });

        axios({
            method: 'get',
            url: '/account',
            params: data,
        })
            .then(res => {
                if (res.data.uuid) {
                    dispatch({
                        type: actionTypes.SIGNIN_SUCCESS,
                        payload: {
                            request: false,
                            _id: res.data.uuid,
                        }
                    });
                } else {
                    dispatch({
                        type: actionTypes.SIGNIN_WRONG_DATA,
                        payload: {
                            request: false,
                            _id: null,
                            error_message: 'Пользователь с такими данными не найден'
                        },
                    });
                }
            })
            .catch(res => {
                dispatch({
                    type: actionTypes.SIGNIN_FAIL,
                    payload: {
                        request: false,
                        error_message: 'err'
                    },
                });
            })
    }
};
