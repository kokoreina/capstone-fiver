import { IsInt, IsString } from "class-validator";

export class CreateCongViecDto {
    @IsString()
    ten_cong_viec
    @IsInt()
    danh_gia
    @IsInt()
    gia_tien
    @IsString()
    mo_ta
    @IsString()
    mo_ta_ngan
    @IsInt()
    sao_cong_viec
    @IsInt()
    ma_chi_tiet_loai
}
