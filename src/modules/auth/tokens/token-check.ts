import { BadGatewayException, BadRequestException, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JsonWebTokenError, TokenExpiredError } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "src/common/decorators/is-public.decorator";

@Injectable()
export class TokenCheck extends AuthGuard('check-token') {
    constructor(private reflector: Reflector) {
        super();
      }
  canActivate(context: ExecutionContext) {
    console.log('token-can activate');
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (isPublic) {
        return true;
      }
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // hàm handle request sẽ luôn luôn chạy cho dù kiểm tra token có đúng hay là sai
    console.log('token-handlerequest');
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      if (info instanceof TokenExpiredError) {
        throw new ForbiddenException(info.message);
      }
      if (info instanceof JsonWebTokenError) {
        throw new UnauthorizedException(info.message);
      }
      if(info instanceof Error){
        throw new BadRequestException(info.message)
      }
      throw err || new BadGatewayException();
    }
    return user;
  }
}