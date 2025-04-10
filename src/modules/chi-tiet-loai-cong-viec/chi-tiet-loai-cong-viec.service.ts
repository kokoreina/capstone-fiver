import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChiTietLoaiCongViecService {
  constructor(public prisma:PrismaService){

  }
  async create(createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto) {
    const {ten_chi_tiet}=createChiTietLoaiCongViecDto
    const chiTietExits= await this.prisma.chiTietLoaiCongViec.findFirst({
      where:{
        ten_chi_tiet:ten_chi_tiet,
      }
    })
    if(chiTietExits){
      throw new BadRequestException("tên chi tiết đã tồn tại")
    }
    const chiteitnew= await this.prisma.chiTietLoaiCongViec.create({
      data:{
        ten_chi_tiet:ten_chi_tiet,
      }
    })
    return chiteitnew
  }

  async getListChiTietCongViec() {
    const listChiTietCongViec=await this.prisma.chiTietLoaiCongViec.findMany()
    return listChiTietCongViec
  }

  findOne(id: number) {
    return `This action returns a #${id} chiTietLoaiCongViec`;
  }

  update(id: number, updateChiTietLoaiCongViecDto: UpdateChiTietLoaiCongViecDto) {
    return `This action updates a #${id} chiTietLoaiCongViec`;
  }

  remove(id: number) {
    return `This action removes a #${id} chiTietLoaiCongViec`;
  }
}
