import api from './api'

export default {
    async listarCarros() {
        try {
          const res = await api.get('/carros');
          return res.data;
        } catch (error) {
          console.log(error.message);
        }
    }
}

