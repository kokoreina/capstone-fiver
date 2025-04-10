import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_TOKEN_SECRET } from 'src/common/constant/app.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'check-token') {
  constructor(private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "ACCESS_TOKEN_SECRET", // Thay bằng secret của bạn
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId }; // Trả về thông tin người dùng
  }
}
