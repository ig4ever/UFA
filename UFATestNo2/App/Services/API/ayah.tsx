import axios from 'axios';

import * as c from '../../constants';
import { handler } from './utils';

export async function getAyah(params: any) {
  try {
    let res = await axios.get(c.GET_AYAH + '/' + params);

    return res.data;
  } catch (e) {
    throw handler(e)
  }
}