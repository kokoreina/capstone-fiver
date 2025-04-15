import { PartialType } from '@nestjs/swagger';
import { CreateThueCongViecDto } from './create-thue-cong-viec.dto';
import { IsBoolean, IsDateString, IsInt, IsOptional } from 'class-validator';

export class UpdateThueCongViecDto extends PartialType(CreateThueCongViecDto) {
  @IsOptional()
  @IsInt()
  ma_cong_viec;
  @IsOptional()
  @IsInt()
  ma_ngoi_thue;
  @IsOptional()
  @IsDateString()
  ngay_thue;
  @IsOptional()
  @IsBoolean()
  hoan_thanh;
}
