import { Module } from '@nestjs/common';
import { DeezappService } from './DeezAppsong.service';
import {DeezappController } from './Deezappsong.controller';


@Module({
  controllers: [DeezappController],
  providers: [DeezappService],
})
export class DeezappModule {}
