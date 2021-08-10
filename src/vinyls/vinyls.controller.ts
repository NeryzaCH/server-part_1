import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { VinylEntity } from './vinyl.entity';
import { diskStorage } from 'multer';
import { VinylsService } from './vinyls.service';
import { customName } from 'src/utils/customname';

@Controller('vinyls')
export class VinylsController {

    constructor(private service: VinylsService){

    }

    @Get()
    getAllVinyls(){
        return this.service.getAllVinyls();
    }
    
    @Get(':id')
    getVynil(@Param() params){
        return this.service.getVinyl(params.id);
    }

    @Post()
        addVinyl(@Body() vinyl:VinylEntity){
            return this.service.createVinyl(vinyl);
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

    async uploadFile(@Body() vinyl:VinylEntity,@UploadedFile() file){
        vinyl.avatar = file.filename;
        await this.service.createVinyl(JSON.parse(JSON.stringify(vinyl)));

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
    updateVinyl(@Body() vinyl:VinylEntity){
        this.service.updateVinyl(vinyl);
    }
    
    @Delete(':id')
    deleteVinyl(@Param() params){
        this.service.deleteVinyl(params.id);
    }

}
