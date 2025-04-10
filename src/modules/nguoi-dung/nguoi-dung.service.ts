import { Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NguoiDungService {
  constructor(public prisma:PrismaService){

  }
  create(createNguoiDungDto: CreateNguoiDungDto) {
    return 'This action adds a new nguoiDung';
  }

  async getListUser() {
    const listuser=await this.prisma.nguoiDung.findMany()
    return listuser
  }

  findOne(id: number) {
    return `This action returns a #${id} nguoiDung`;
  }

  update(id: number, updateNguoiDungDto: UpdateNguoiDungDto) {
    return `This action updates a #${id} nguoiDung`;
  }

  remove(id: number) {
    return `This action removes a #${id} nguoiDung`;
  }
}
