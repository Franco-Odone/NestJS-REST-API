import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Para poder usar las validaciónes de 'class-validator'
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
