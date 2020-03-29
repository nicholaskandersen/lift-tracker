import axios from "axios";

const baseURL = "http://localhost:62136/"

export default {
    workOut(url = baseURL + "api/workout") {
        return {
            fetch_all: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url + newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
        
    }

}

