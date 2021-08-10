import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { customName } from 'src/utils/customname';
import { DiscEntity } from './disc.entity';
import { DiscsService } from './discs.service';
import { diskStorage } from 'multer';

@Controller('discs')
export class DiscsController {

    constructor(private service:  DiscsService){
    }

    @Get()
    getAllUsers(){
        return this.service.getAllDiscs();
    }

    @Get(':id')
    getUser(@Param() params){
        return this.service.getDisc(params.id);
    }

    @Post()
        addDisc(@Body() disc: DiscEntity){
        return this.service.createDisc(disc);
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image',{
            storage:diskStorage({
                destination:'./avatars',
                filename: customName
            })
        })
    )
    async uploadFile(@Body() disc:DiscEntity,@UploadedFile() file){
        disc.avatar = file.filename;
        await this.service.createDisc(JSON.parse(JSON.stringify(disc)));

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
    updateDisc(@Body() disc:DiscEntity){
        this.service.updateDisc(disc);
    }

    @Delete(':id')
    deleteDisc(@Param() params){
        this.service.deleteDisc(params.id);
    }

}
