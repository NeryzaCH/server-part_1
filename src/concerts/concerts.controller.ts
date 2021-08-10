import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { customName } from 'src/utils/customname';
import { diskStorage } from 'multer';
import { ConcertEntity } from './concert.entity';
import { ConcertsService } from './concerts.service';

@Controller('concerts')
export class ConcertsController {

    constructor(private service: ConcertsService){

    }

    @Get()
    getAllConcerts(){
        return this.service.getAllConcerts();
    }

    @Get(':id')
    getConcert(@Param() params){
        return this.service.getConcert(params.id);
    }

    @Post()
    addConcert(@Body() concert:ConcertEntity){
       return this.service.createConcert(concert);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image',{
            storage: diskStorage({
                destination:'./avatars',
                filename: customName
            })
        })
    )

    async uploadFile(@Body() concert:ConcertEntity,@UploadedFile() file){
        concert.avatar = file.filename;
        await this.service.createConcert(JSON.parse(JSON.stringify(concert)));

        const response = {
            originalName: file.originalname,
            finalName: file.filename
        }

        return{
            status: HttpStatus.OK,
            message:"Image has been uploaded",
            data:response
        }

    }

    @Put()
    updateConcert(@Body() concert:ConcertEntity){
        this.service.updateConcert(concert);
    }
    
    @Delete(':id')
    deleteConcert(@Param() params){
        this.service.deleteConcert(params.id);
    }
}


