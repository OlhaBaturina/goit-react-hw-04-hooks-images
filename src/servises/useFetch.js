import axios from 'axios';
// import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '21973303-2099b25a108053c1f3c237a34';
const perPage = 12;

export const fetchImgAPI = (searchQuery, currentPage) => {
    return axios
        .get(
            `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${apiKey}&page=${currentPage}`,
        )
        .then(res => res.data.hits);
};

// export const useFetch =(searchQuery) => {
//     const [data, setData]= useState([]);
//     const [loading, setLoading]= useState(false);
//     const [error, setError]= useState(null);
//     const [currentPage, setCurrentPage]= useState(1);
//     const apiKey = '21973303-2099b25a108053c1f3c237a34';
//     const perPage = 12;

//     useEffect(() => {
//         // if (!searchQuery) {
//         //     return;
//         // }

//         fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${apiKey}&page=${currentPage}`)
//         .then(res => {
//             if(!res.ok){
//                throw Error(`Тo result for your request`)
//             }
//            return res.data
//         })
//         .then(data => {
//             setData(prevState => [...prevState, ...data]);
//             setCurrentPage(prevState => setCurrentPage(prevState + 1));
//             setLoading(false);
//             setError( null )
//             })
//             .catch(error => {
//                 setLoading(false);
//                 setError( error )})

//     }, [searchQuery, currentPage])

//     return {data, error, loading}
// }

// useFetch;
