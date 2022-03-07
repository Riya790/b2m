/* eslint-disable consistent-return */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */

import axios from 'axios';

import url from './url/url'

export const ReadData = async () => {
    try {
        const data = await axios.get(url)
        return data;
    } catch (error) {
        console.log(error);
    }
}