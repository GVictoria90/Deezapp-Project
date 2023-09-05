import { NestFactory } from '@nestjs/core';
import { DeezappModule } from './Deezappsong.module';

async function bootstrap() {
  const app = await NestFactory.create(DeezappModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
