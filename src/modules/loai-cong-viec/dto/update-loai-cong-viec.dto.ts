import { PartialType } from '@nestjs/swagger';
import { CreateLoaiCongViecDto } from './create-loai-cong-viec.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLoaiCongViecDto extends PartialType(CreateLoaiCongViecDto) {
    @IsString()
    @IsOptional()
    ten_loai_cong_viec
}
