import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './tokens/jwt-strategy';
import { PassportModule } from '@nestjs/passport';
import { ACCESS_TOKEN_EXPIRED, ACCESS_TOKEN_SECRET } from 'src/common/constant/app.constant';

@Module({
  imports:[PassportModule,JwtModule.register({
    secret: ACCESS_TOKEN_SECRET,  // Thay đổi với secret của bạn
    signOptions: { expiresIn: ACCESS_TOKEN_EXPIRED },  // Thời gian hết hạn của token
  }),],
  controllers:[AuthController],
  providers: [AuthService,PrismaService,JwtService,JwtStrategy]
})
export class AuthModule {}
