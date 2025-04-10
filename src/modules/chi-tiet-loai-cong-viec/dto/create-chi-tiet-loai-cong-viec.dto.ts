import { IsString } from "class-validator";

export class CreateChiTietLoaiCongViecDto {
    @IsString()
    ten_chi_tiet:string
}
