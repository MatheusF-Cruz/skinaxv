import api from './api'

export default {
    async deletarCarro(id){  
        await api.delete(`/deletecarros/${id}`)  
      }
}