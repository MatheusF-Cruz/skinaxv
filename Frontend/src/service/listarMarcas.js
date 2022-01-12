import api from './api'

export default {
    async listarMarcas(id){  
        const res = await api.get(`/marca/${id}`)
        return res 
      }
}

