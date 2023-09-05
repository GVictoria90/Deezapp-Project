
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { Module } from '@nestjs/common';

import { DeezappModule } from './Deezappsong.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
    DeezappModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
