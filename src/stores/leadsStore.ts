import { InfoEnum, UseAPI } from "@/hooks/API";
import { defineStore } from "pinia";

interface Lead{
    id: number
    name: string
}

export const useLeadsStore = defineStore('leads',{
    state: ()=>{
        return{
            LeadsList: new Array<Lead>()
        }
    },
    actions: {
        async setLead(){
            const leadId = await UseAPI.createLead()
            const {id, name} = await UseAPI.getInfo(InfoEnum.LEADS, leadId)
            const lead = {
                id: id,
                name: name
            }
            this.LeadsList.push(lead)
            return lead
        },
    },

    getters: {
        getList(): Lead[] {
            return this.LeadsList
        }
    }

})