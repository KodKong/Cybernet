import * as axios from "axios";


export const getAllUser = () =>
{
    return axios.get("http://localhost:3000/bd/db1.json")
    .then(response => response.data)
}

export const getPageNumber = (pageNumber) =>
{
    return axios.get(`http://localhost:3000/bd/db${pageNumber}.json`)
    .then(response => response.data); 
}

export const getUserPage = () =>
{
    return axios.get(`http://localhost:3000/bd/db1.json`)
    .then(response => response.data); 
}

export const getCompanys = () =>
{
    return axios.get("http://localhost:3000/bd/companysDB.json")
    .then(response => response.data); 
}