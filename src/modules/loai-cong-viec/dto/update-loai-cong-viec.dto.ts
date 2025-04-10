import { PartialType } from '@nestjs/swagger';
import { CreateLoaiCongViecDto } from './create-loai-cong-viec.dto';

export class UpdateLoaiCongViecDto extends PartialType(CreateLoaiCongViecDto) {}
