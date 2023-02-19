import axios from "axios";

const BASE_URL = 'http://localhost:8000'
export enum API_URLS{
    GET_INFO_BY_ID = '/requests/get-info/',
    SET_CONTACT = '/requests/set-contact',
    SET_LEAD = '/requests/set-lead',
    SET_COMPANY = '/requests/set-company'
}
export enum InfoEnum{
    LEADS ='leads',
    CONTACTS ='contacts',
    COMPANIES = 'companies'
}

 class useAPI{
    async getInfo(type:InfoEnum, id: number){
        const res = await axios.post(BASE_URL+API_URLS.GET_INFO_BY_ID+id, {
            type: type
        })
        console.log(res.data)
        return res.data
    }

    async createLead(){
        const res = await axios.post(BASE_URL+API_URLS.SET_LEAD, {name: []})
        return res.data
    }

    async createContact(){
        const res = await axios.post(BASE_URL+API_URLS.SET_CONTACT, {name: []})
        return res.data
    }

    async createCompany(){
        const res = await axios.post(BASE_URL+API_URLS.SET_COMPANY, {name: []})
        return res.data
    }
}
export const UseAPI = new useAPI()