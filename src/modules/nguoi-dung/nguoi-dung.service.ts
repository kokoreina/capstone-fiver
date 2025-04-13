import { Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NguoiDungService {
  constructor(public prisma:PrismaService){

  }
  async create(createNguoiDungDto: CreateNguoiDungDto) {
    const {name,email,pass_word,phone,birth_day,gender,role,skill,certification}=createNguoiDungDto
    const postUser= await this .prisma.nguoiDung.create({
      data:{
        name:name,
        email:email,
        pass_word:pass_word,
        phone:phone,
        birth_day:birth_day,
        gender:gender,
        role:role,
        skill:skill,
        certification:certification
      }
    })
    return postUser
  }

  async getListUser() {
    const listuser=await this.prisma.nguoiDung.findMany()
    return listuser
  }

  async findOne(id: number) {
    const inforIdUser= await this.prisma.nguoiDung.findFirst({
      where:{
        id:id
      }
    })
    return inforIdUser
  }
  async findTenNguoiDung(tenNguoiDung: string) {
    const inforNameUser= await this.prisma.nguoiDung.findFirst({
      where:{
        name:tenNguoiDung
      }
    })
    return inforNameUser
  }
  async update(id: number, updateNguoiDungDto: UpdateNguoiDungDto) {
    const{name,email,pass_word,phone,birth_day,gender,role,skill,certification}=updateNguoiDungDto
    const updateUser= await this.prisma.nguoiDung.update({
      where:{
        id:id
      },
      data:{
        name:name,
        email:email,
        pass_word:pass_word,
        phone:phone,
        birth_day:birth_day,
        gender:gender,
        role:role,
        skill:skill,
        certification:certification
      }
    })
    return updateUser
  }

  async remove(id: number) {
    const deleteUser= await this.prisma.nguoiDung.delete({
      where:{
        id:id
      }
    })
    return deleteUser;
  }
}
