import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { AmoAPI } from './utils/AmoAPI';

@Module({
  imports: [],
  controllers: [RequestsController],
  providers: [RequestsService, AmoAPI]
})
export class RequestsModule {}
