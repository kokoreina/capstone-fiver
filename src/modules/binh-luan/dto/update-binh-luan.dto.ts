import { PartialType } from '@nestjs/swagger';
import { CreateBinhLuanDto } from './create-binh-luan.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateBinhLuanDto extends PartialType(CreateBinhLuanDto) {
    // @IsInt()
    // Id:number
        @IsString()
        noi_dung?:string| undefined
        @IsInt()
        sao_binh_luan?: number | undefined;
}
