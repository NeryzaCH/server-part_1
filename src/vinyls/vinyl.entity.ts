import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vinyls')
export class VinylEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    namealbum: string;

    @Column({length: 50})
    artist: string;

    @Column({length: 50})
    publication: string;

    @Column({length: 50})
    gender: string;

    @Column({length: 200})
    avatar: string;

}
