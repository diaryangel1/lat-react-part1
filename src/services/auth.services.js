// up43 membuat user login yang datanya disimpan di Fakestoreapi.com
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
// up46 MENYETING TOKEN DENGAN CALLBACK
export const login = (data, callback) => {

    return axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then((res) => {
        callback(true, res.data.token)
    })
    .catch((error) => {
        callback(false, error)
    })

}


// up50 import dari jwt decode membuat export const username

export const getUsername = (token) => {
  const decoded = jwtDecode(token)
//   console.log(decoded)
//   up52 mengambil data user yang tersimpan di console untuk ditampilkan di navbar dekat logout
  return decoded.user
 
}

