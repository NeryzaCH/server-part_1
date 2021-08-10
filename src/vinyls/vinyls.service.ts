import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VinylEntity } from './vinyl.entity';

@Injectable()
export class VinylsService {
    constructor(@InjectRepository(VinylEntity) private rep:Repository<VinylEntity>){

    }

    async getAllVinyls(): Promise<VinylEntity[]>{
        return await this.rep.find();
    }

    async getVinyl(_id:number):Promise<VinylEntity[]>{
        return await this.rep.findByIds(
            [
                _id
            ]
        )
    }

    async createVinyl(vinyl:VinylEntity){
        await this.rep.insert(vinyl);
    }

    async updateVinyl(vinyl:VinylEntity){
        await this.rep.update({id:vinyl.id},vinyl);
    }

    async deleteVinyl(vinyl:VinylEntity){
        await this.rep.delete(vinyl);
    }

}
