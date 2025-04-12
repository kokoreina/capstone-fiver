import { PartialType } from '@nestjs/swagger';
import { CreateChiTietLoaiCongViecDto } from './create-chi-tiet-loai-cong-viec.dto';
import { IsString } from 'class-validator';

export class UpdateChiTietLoaiCongViecDto extends PartialType(CreateChiTietLoaiCongViecDto) {
     @IsString()
     ten_chi_tiet:string
}
