import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env']
    }),
    RequestsModule
  ],
})
export class AppModule {}
