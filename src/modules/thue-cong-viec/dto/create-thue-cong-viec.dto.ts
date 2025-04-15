import { IsBoolean, IsDateString, IsInt } from "class-validator";

export class CreateThueCongViecDto {
    @IsInt()
    ma_cong_viec
    @IsInt()
    ma_ngoi_thue
    @IsDateString()
    ngay_thue
    @IsBoolean()
    hoan_thanh
}
