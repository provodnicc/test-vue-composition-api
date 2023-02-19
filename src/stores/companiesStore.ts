import { InfoEnum, UseAPI } from "@/hooks/API";
import { defineStore } from "pinia";

interface Company{
    id: number
    name: string
}

export const useCompaniesStore = defineStore('companies',{
    state: ()=>{
        return{
            CompaniesList: new Array<Company>()
        }
    },
    actions: {
        async setCompany(){
            const companyId = await UseAPI.createCompany()
            const {id, name} = await UseAPI.getInfo(InfoEnum.COMPANIES, companyId)
            const company = {
                id:id,
                name:name
            }
            this.CompaniesList.push(company)
            return company
        },
    }
})