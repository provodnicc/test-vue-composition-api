import { Injectable } from '@nestjs/common';
import { GetInfoDto } from './dtos/getInfo.dto';
import { SetCompaniesDto } from './dtos/setCompanies.dto';
import { SetContactsDto } from './dtos/setContacts.dto';
import { SetLeadsDto } from './dtos/setLeads.dto';
import { InfoEnum, InfoEnumURL } from './enums/Info.enum';
import { AmoAPI } from './utils/AmoAPI';

@Injectable()
export class RequestsService {
    constructor(
        private amoAPI: AmoAPI
    ){}

    async getInfo(getInfoDto: GetInfoDto, id: number){
        let response
        switch(getInfoDto.type){
            case InfoEnum.COMPANIES:
                response = await this.amoAPI.getInfo(InfoEnumURL.COMPANIES, id)
                break
            case InfoEnum.CONTACTS: 
                response = await this.amoAPI.getInfo(InfoEnumURL.CONTACTS, id)
                break
            case InfoEnum.LEADS: 
                response = await this.amoAPI.getInfo(InfoEnumURL.LEADS, id)
                break
        }
        return response
    }

    async setContact(setContactDto: SetContactsDto){
        const res = await this.amoAPI.setInfo(InfoEnumURL.CONTACTS, setContactDto)
        return res.contacts[0].id
    }
    
    async setCompany(setCompanyDto: SetCompaniesDto){
        const res = await this.amoAPI.setInfo(InfoEnumURL.COMPANIES, setCompanyDto)
        return res.companies[0].id
    }

    async setLead(setLeadDto: SetLeadsDto){
        const res = await this.amoAPI.setInfo(InfoEnumURL.LEADS, setLeadDto)
        return res.leads[0].id
    }
}
