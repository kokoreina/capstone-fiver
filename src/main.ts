import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TokenCheck } from './modules/auth/tokens/token-check';
import { PermissionCheck } from './modules/auth/permission/permission-check';
import { ResponseSuccessInterceptor } from './common/interceptors/logging.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //global
  const reflector = app.get(Reflector);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new TokenCheck(reflector));
  app.useGlobalGuards(new PermissionCheck(reflector))
  app.useGlobalInterceptors(new ResponseSuccessInterceptor(reflector))

  //cors
  app.enableCors({
    origin: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Cyber Fiverr')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory,{
    swaggerOptions:{
      persistAuthorization:true,
    }
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
