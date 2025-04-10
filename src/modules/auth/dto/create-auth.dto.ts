import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateAuthDto{
    @IsString()
    name: string


    @IsString()
    @IsEmail()
    // @ApiProperty()
    email:string

    @IsString()
    // @ApiProperty()
    pass_word:string
}