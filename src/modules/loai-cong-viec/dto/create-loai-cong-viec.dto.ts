import { IsString } from "class-validator";

export class CreateLoaiCongViecDto {
    @IsString()
    ten_loai_cong_viec
}
