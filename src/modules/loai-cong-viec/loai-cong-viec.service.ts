import { Injectable } from '@nestjs/common';
import { CreateLoaiCongViecDto } from './dto/create-loai-cong-viec.dto';
import { UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoaiCongViecService {
  constructor(public prisma:PrismaService){

  }
  create(createLoaiCongViecDto: CreateLoaiCongViecDto) {
    return 'This action adds a new loaiCongViec';
  }

  async getListLoai() {
    const listLoaiCongViec=await this.prisma.loaiCongViec.findMany()
    return listLoaiCongViec
  }

  findOne(id: number) {
    return `This action returns a #${id} loaiCongViec`;
  }

  update(id: number, updateLoaiCongViecDto: UpdateLoaiCongViecDto) {
    return `This action updates a #${id} loaiCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} loaiCongViec`;
  }
}
