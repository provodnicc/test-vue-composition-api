import { ApiProperty } from "@nestjs/swagger"

export class SetLeadsDto{
    @ApiProperty()
    name?: string

    @ApiProperty()
    price?: number
    
    @ApiProperty()
    status?: number
    
    @ApiProperty()
    pipeline_id?: number
    
    @ApiProperty()
    created_by?: number
    
    @ApiProperty()
    updated_by?: number
    
    @ApiProperty()
    closed_at?: number
    
    @ApiProperty()
    created_at?: number
    
    @ApiProperty()
    updated_at?: number
    
    @ApiProperty()
    loss_reason_id?: number
    
    @ApiProperty()
    responsible_user_id?: number
    
    @ApiProperty()
    custom_fields_values?: Array<any>
    
    @ApiProperty()
    _embedded?: object
}