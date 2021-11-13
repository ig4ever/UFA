import axios from 'axios';

import * as c from '../../constants';
import { handler } from './utils';

export async function getJuz(params: any) {
  try {
    let res = await axios.get(c.GET_JUZ + '/' + params);

    return res.data;
  } catch (e) {
    throw handler(e)
  }
}