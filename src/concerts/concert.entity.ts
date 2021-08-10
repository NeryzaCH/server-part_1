import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('concerts')
export class ConcertEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 50})
    artist: string;

    @Column({length: 50})
    place: string;

    @Column({length: 50})
    date: string;

    @Column({length: 200})
    avatar: string;
}
