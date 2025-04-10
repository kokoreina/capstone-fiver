import { Injectable } from '@nestjs/common';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ThueCongViecService {
  constructor(public prisma:PrismaService){

  }
  create(createThueCongViecDto: CreateThueCongViecDto) {
    return 'This action adds a new thueCongViec';
  }

  async getListThue() {
    const listThue= await this.prisma.thueCongViec.findMany()
    return listThue
  }

  findOne(id: number) {
    return `This action returns a #${id} thueCongViec`;
  }

  update(id: number, updateThueCongViecDto: UpdateThueCongViecDto) {
    return `This action updates a #${id} thueCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} thueCongViec`;
  }
}
