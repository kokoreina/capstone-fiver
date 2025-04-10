import { Injectable } from '@nestjs/common';
import { CreateCongViecDto } from './dto/create-cong-viec.dto';
import { UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CongViecService {
  constructor(public prisma:PrismaService){}
  create(createCongViecDto: CreateCongViecDto) {
    return 'This action adds a new congViec';
  }

  async getListCongviec() {
    const listCongviec=await this.prisma.congViec.findMany()
    return listCongviec
  }

  findOne(id: number) {
    return `This action returns a #${id} congViec`;
  }

  update(id: number, updateCongViecDto: UpdateCongViecDto) {
    return `This action updates a #${id} congViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} congViec`;
  }
}
