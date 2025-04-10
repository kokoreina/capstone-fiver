import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import {
  ACCESS_TOKEN_EXPIRED,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET,
} from 'src/common/constant/app.constant';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
@Injectable()
export class AuthService {
  constructor(
    public prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async login(createUserDto: CreateUserDto) {
    const { email, pass_word } = createUserDto;
    console.log({ email, pass_word });
    const userExits = await this.prisma.nguoiDung.findFirst({
      where: {
        email: email,
      },
    });
    if (!userExits) {
      throw new BadRequestException(`Tài khoản chưa tồn tại vui lòng đăng ký`);
    }
    if (!userExits.pass_word) {
      throw new BadRequestException(
        `Không hợp lệ vui lòng liên hệ chăm sóc khách hàng`,
      );
    }
    //so sánh password
    // const isPassword = bcrypt.compareSync(pass_word, userExits.pass_word);
    // if (!isPassword) {
    //   throw new BadRequestException(`Mật khẩu không chính xác`);
    // }
    const tokens = this.createTokens(userExits.id);
    return  tokens ;
  }
  async register(CreateAuthDto: CreateAuthDto) {
    const { name, email, pass_word } = CreateAuthDto;

    // Kiểm tra xem email đã tồn tại hay chưa
    const userExits = await this.prisma.nguoiDung.findFirst({
      where: {
        email: email,
      },
    });

    if (userExits) {
      throw new BadRequestException('Tài khoản đã tồn tại, vui lòng đăng nhập');
    }

    // Mã hóa mật khẩu
    const passwordHash = bcrypt.hashSync(pass_word, 10);

    // Tạo người dùng mới
    const userNew = await this.prisma.nguoiDung.create({
      data: {
        name:name,
        email: email,
        pass_word: pass_word,
      },
    });

    // Xoá mật khẩu khi trả về để không lộ thông tin nhạy cảm
    return userNew

    // Trả về người dùng mới tạo
  }
  createTokens(userId: number) {
    if (!userId) throw new BadRequestException(`Không có userId để tạo token`);
    const accessToken = this.jwt.sign(
      { userId: userId },
      {
        expiresIn: ACCESS_TOKEN_EXPIRED,
        secret: ACCESS_TOKEN_SECRET,
      },
    );
    const refreshToken = this.jwt.sign(
      { userId: userId },

      {
        expiresIn: REFRESH_TOKEN_EXPIRED,
        secret: REFRESH_TOKEN_SECRET,
      },
    );
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
