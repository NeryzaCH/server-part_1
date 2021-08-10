import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConcertEntity } from './concert.entity';

@Injectable()
export class ConcertsService {

    constructor(@InjectRepository(ConcertEntity) private rep:Repository<ConcertEntity>){
    }

    async getAllConcerts(): Promise<ConcertEntity[]>{
        return await this.rep.find();
    }

    async getConcert(_id:number):Promise<ConcertEntity[]>{
        return await this.rep.findByIds(
            [
                _id
            ]
        )
    }

    async createConcert(concert:ConcertEntity){
        await this.rep.insert(concert);
    }

    async updateConcert(concert:ConcertEntity){
        await this.rep.update({id:concert.id},concert);
    }

    async deleteConcert(concert:ConcertEntity){
        await this.rep.delete(concert);
    }
    
}
