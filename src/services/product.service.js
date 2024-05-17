// up26 belajar menggunakan axios untuk latihan API

import axios from 'axios'
// up29 memasukan parameter call back di getproduct
export const getProducts = (callback) => {
    // up27 belajar axios untuk copy url dari fakestoreapi
            axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                callback(res.data)
                
                })
                .catch((err) => {
                    console.log(err)
            })
}