import axios from 'axios';

import * as c from '../../constants';
import { handler } from './utils';

export async function getQuran(params: string) {
  try {
    let res = await axios.get(c.GET_QURAN + '/' + params);

    return res.data;
  } catch (e) {
    throw handler(e)
  }
}