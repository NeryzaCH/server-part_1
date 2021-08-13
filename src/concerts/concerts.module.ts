import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertEntity } from './concert.entity';
import { ConcertsController } from './concerts.controller';
import { ConcertsService } from './concerts.service';

@Module({
  providers: [ConcertsService],
  controllers:[
    ConcertsController
  ],
  imports:[
    TypeOrmModule.forFeature(
      [        
        ConcertEntity
      ]
      )
    ]
})
export class ConcertsModule {}
