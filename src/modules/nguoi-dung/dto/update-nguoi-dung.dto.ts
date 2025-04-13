import { PartialType } from '@nestjs/swagger';
import { CreateNguoiDungDto } from './create-nguoi-dung.dto';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateNguoiDungDto extends PartialType(CreateNguoiDungDto) {
  @IsOptional()
  @IsString()
  name;
  @IsOptional()
  @IsString()
  email;
  @IsOptional()
  @IsString()
  pass_word;
  @IsOptional()
  @IsString()
  phone;
  @IsOptional()
  @IsDateString()
  birth_day;
  @IsOptional()
  @IsString()
  gender;
  @IsOptional()
  @IsString()
  role;
  @IsOptional()
  @IsString()
  skill;
  @IsOptional()
  @IsString()
  certification;
}
