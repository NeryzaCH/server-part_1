import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscEntity } from './disc.entity';

@Injectable()
export class DiscsService {
    deleteDisc(id: any) {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectRepository(DiscEntity) private rep:Repository<DiscEntity>){
    }

    async getAllDiscs(): Promise<DiscEntity[]>{
        return await this.rep.find();
    }

    async getDisc(_id:number):Promise<DiscEntity[]>{
        return await this.rep.findByIds(
            [
                _id
            ]
        )
    }

    async createDisc(disc:DiscEntity){
        await this.rep.insert(disc);
    }

    async updateDisc(disc:DiscEntity){
        await this.rep.update({id:disc.id},disc);
    }

    async deleteUser(disc:DiscEntity){
        await this.rep.delete(disc);
    }


}
