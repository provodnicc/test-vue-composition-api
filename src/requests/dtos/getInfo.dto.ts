import { ApiProperty } from "@nestjs/swagger";
import { InfoEnum } from "../enums/Info.enum";

export class GetInfoDto{
    @ApiProperty()
    type: InfoEnum
}