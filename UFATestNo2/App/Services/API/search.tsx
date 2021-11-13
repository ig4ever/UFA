import axios from 'axios';

import * as c from '../../constants';
import { handler } from './utils';

export async function getSearch(params: string) {
  try {
    let res = await axios.get(c.GET_SEARCH + '/' + params);

    return res.data;
  } catch (e) {
    throw handler(e)
  }
}