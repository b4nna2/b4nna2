import axios from 'axios'

// ** Get table Data
export const getData = params => {
  return async dispatch => {
    await axios.get('https://192.168.1.42:5000/users', params).then(response => {
      dispatch({
        type: '',
        allData: response.data.allData,
        data: response.data.invoices,
        totalPages: response.data.total,
        params
      })
    })
  }
}
