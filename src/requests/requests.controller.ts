import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RequestsService } from './requests.service';
import {ApiTags} from '@nestjs/swagger'
import { GetInfoDto } from './dtos/getInfo.dto';
import { SetCompaniesDto } from './dtos/setCompanies.dto';
import { SetLeadsDto } from './dtos/setLeads.dto';
import { SetContactsDto } from './dtos/setContacts.dto';

@ApiTags('Requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}


  @Post('get-info/:id')
  async getInfo(
    @Body() 
    GetInfoDto: GetInfoDto, 
    
    @Param('id')
    id: number
  ){
    return await this.requestsService.getInfo(GetInfoDto, id)
  }

  @Post('set-company')
  async setCompany(
    @Body() 
    setCompanyDto: SetCompaniesDto
  ){
    return await this.requestsService.setCompany(setCompanyDto)
  }

  @Post('set-lead')
  async setLead(
    @Body() 
    setLeadDto: SetLeadsDto
  ){
    return await this.requestsService.setLead(setLeadDto)
  }

  @Post('set-contact')
  async setContact(
    @Body() 
    setContactDto: SetContactsDto
  ){
    return await this.requestsService.setContact(setContactDto)
  }
}
