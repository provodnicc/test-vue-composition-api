import { NestFactory } from '@nestjs/core';
import {Logger} from '@nestjs/common'
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  
  const logger = new Logger('NestApplication')
  const PORT = process.env.API_PORT
  const config = new DocumentBuilder()
    .setTitle('Backend for Frontend')
    .setDescription('there is API for Requests')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, ()=>logger.verbose(`app started on port: ${PORT}`));
}
bootstrap();
