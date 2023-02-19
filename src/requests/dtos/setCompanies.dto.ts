import { ApiProperty } from "@nestjs/swagger"

export class SetCompaniesDto{
    
    @ApiProperty()
    name?: string
    
    @ApiProperty()
    responsible_user_id?: number
    
    @ApiProperty()
    created_by?: number
    
    @ApiProperty()
    updated_by?: number
    
    @ApiProperty()
    created_at?: number
    
    @ApiProperty()
    updated_at?: number
    
    @ApiProperty()
    custom_fields_values?: Array<any>
    
    @ApiProperty()
    _embedded?: object

    @ApiProperty()
    request_id?: string
}