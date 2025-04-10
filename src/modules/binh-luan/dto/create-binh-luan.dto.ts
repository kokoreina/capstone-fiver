
import {  IsInt, IsString } from "class-validator";

export class CreateBinhLuanDto {
    @IsInt()
    ma_cong_viec: number
    @IsInt()
    ma_ngoi_binh_luan:number
    @IsString()
    noi_dung:string
    @IsInt()
    sao_binh_luan:number
}
