import { IsDateString, IsString } from "class-validator";
import { workerData } from "worker_threads";

export class CreateNguoiDungDto {
    @IsString()
    name
    @IsString()
    email
    @IsString()
    pass_word
    @IsString()
    phone
    @IsDateString()
    birth_day
    @IsString()
    gender
    @IsString()
    role
    @IsString()
    skill
    @IsString()
    certification
}
