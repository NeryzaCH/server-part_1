import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscEntity } from './disc.entity';
import { DiscsController } from './discs.controller';
import { DiscsService } from './discs.service';

@Module({
  providers: [DiscsService],
  controllers:[
    DiscsController
  ],
  imports:[
    TypeOrmModule.forFeature(
      [
        DiscEntity
      ]
      )
  ]
})
export class DiscsModule {}
