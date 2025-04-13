import { Injectable } from '@nestjs/common';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ThueCongViecService {
  constructor(public prisma:PrismaService){

  }
  async create(createThueCongViecDto: CreateThueCongViecDto) {
    const{}=createThueCongViecDto
    const postThueCongViec= await this.prisma.thueCongViec.create({
      data:{
        
      }
    })
    return postThueCongViec
  }

  async getListThue() {
    const listThue= await this.prisma.thueCongViec.findMany()
    return listThue
  }

  async findOne(id: number) {
    const inforIdThue= await this.prisma.thueCongViec.findFirst({
      where:{
        id:id
      }
    })
    return `This action returns a #${id} thueCongViec`;
  }

  async update(id: number, updateThueCongViecDto: UpdateThueCongViecDto) {
    return `This action updates a #${id} thueCongViec`;
  }

  async remove(id: number) {
    return `This action removes a #${id} thueCongViec`;
  }
}
