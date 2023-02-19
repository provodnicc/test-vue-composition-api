import { InfoEnum, UseAPI } from "@/hooks/API";
import { defineStore } from "pinia";

interface Contacts{
    id: number
    name: string
}

export const useContactsStore = defineStore('contacts',{
    state: ()=>{
        return{
            ContactsList: new Array<Contacts>()
        }
    },
    actions: {
        async setContact(){
            const contactId = await UseAPI.createContact()
            const {id, name} = await UseAPI.getInfo(InfoEnum.CONTACTS, contactId)
            const contact = {
                id:id, 
                name:name
            }
            this.ContactsList.push(contact)
            return contact
        },
        

    }
})