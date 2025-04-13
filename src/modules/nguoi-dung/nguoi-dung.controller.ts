import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { SkipPermission } from 'src/common/decorators/skip-permission.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseSuccess } from 'src/common/decorators/response-success.decorator';

@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService) {}
  @ResponseSuccess("post user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Post()
  async create(@Body() createNguoiDungDto: CreateNguoiDungDto) {
    const result= await this.nguoiDungService.create(createNguoiDungDto);
    return result
  }
  @ResponseSuccess("get list user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get('list')
  async getListUser() {
    const result=await this.nguoiDungService.getListUser();
    return result
  }
  @ResponseSuccess("get infor id user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await this.nguoiDungService.findOne(+id);
    return result
  }
  @ResponseSuccess("get infor id user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Get(':tenNguoiDung')
  async findTenNguoiDungOne(@Param('tenNguoiDung') tenNguoiDung: string) {
    const result= await this.nguoiDungService.findTenNguoiDung(tenNguoiDung);
    return result
  }
  @ResponseSuccess("update user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNguoiDungDto: UpdateNguoiDungDto) {
    const result= await this.nguoiDungService.update(+id, updateNguoiDungDto);
    return result
  }
  @ResponseSuccess("delete user thành công")
  @SkipPermission()
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await this.nguoiDungService.remove(+id);
    return result
  }
}
