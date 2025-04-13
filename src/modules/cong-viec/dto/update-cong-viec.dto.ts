import { PartialType } from '@nestjs/swagger';
import { CreateCongViecDto } from './create-cong-viec.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCongViecDto extends PartialType(CreateCongViecDto) {
        @IsOptional()
        @IsString()
        ten_cong_viec
        @IsOptional()
        @IsInt()
        danh_gia
        @IsOptional()
        @IsInt()
        gia_tien
        @IsOptional()
        @IsString()
        mo_ta
        @IsOptional()
        @IsString()
        mo_ta_ngan
        @IsOptional()
        @IsInt()
        sao_cong_viec
        @IsOptional()
        @IsInt()
        ma_chi_tiet_loai
}
