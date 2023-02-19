import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator"
import { HttpException } from "@nestjs/common/exceptions"
import { Logger } from "@nestjs/common/services"
import axios from "axios"
import { InfoEnumURL } from "../enums/Info.enum"

@Injectable()
export class AmoAPI{
    logger = new Logger(AmoAPI.name)
    async getToken(){
        try{
            this.logger.log('try get token')
            const response = await axios.get(
                process.env.AMO_TOKEN_URL, 
                {
                    headers: {
                        'X-Client-Id': process.env.CLIENT_ID
                    }
                }
            )
            this.logger.log('get token successfully')
            return {
                baseUrl: 'https://'+response.data.base_domain,
                accessToken: response.data.access_token
            }
        }catch(e){
            this.logger.warn('can not to get token')
            throw new HttpException(e.message, e.response.status)
        }
    }

    async getInfo(endpoint: InfoEnumURL, id: number){
        try{
            const tokenInfo = await this.getToken()
            this.logger.log('try to get '+endpoint+ ' info: '+id)
            const res = await axios.get(
                tokenInfo.baseUrl+endpoint+'/'+id,
                {
                    headers: {
                        Authorization: 'Bearer '+tokenInfo.accessToken
                    }
                }
            )
            this.logger.log('get info '+ endpoint+ ' successfully: '+id)
            return res.data
        }catch(e){
            this.logger.warn('can not to get info')
            throw new HttpException(e.message, e.response.status)
        }
    }

    async setInfo(endpoint: string, data: any){
        try{
            const tokenInfo = await this.getToken()
            this.logger.log('try to set info '+ endpoint+ ' successfully')
            const res = await axios.post(
                tokenInfo.baseUrl+endpoint,
                data,
                {
                    headers:{
                        Authorization: 'Bearer '+tokenInfo.accessToken
                    }
                }
            )
            this.logger.log('set info '+ endpoint+ ' successfully')
            return res.data._embedded
        }catch(e){
            this.logger.warn('can not to set info')
            throw new HttpException(e.message, e.response.status)
        }
    }
}