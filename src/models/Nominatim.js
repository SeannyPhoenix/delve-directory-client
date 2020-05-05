import axios from 'axios';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';
const NOMINATIM_PARAMS = {
  format: 'json',
  limit: 10,
  polygon_svg: 1,
};

export default class Nominatim {
  static async search(query) {
    try {
      const params = Object.entries(NOMINATIM_PARAMS)
        .map((entry) => entry.join('='))
        .join('&');
      return await axios.get(`${NOMINATIM_URL}/${query}?${params}`);
    } catch (err) {
      console.log(err);
      return {
        data: null,
      };
    }
  }
}
