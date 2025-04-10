import { PartialType } from '@nestjs/swagger';
import { CreateChiTietLoaiCongViecDto } from './create-chi-tiet-loai-cong-viec.dto';

export class UpdateChiTietLoaiCongViecDto extends PartialType(CreateChiTietLoaiCongViecDto) {}
