import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 하나의 모듈에서 어플리케이션을 생성
  const app = await NestFactory.create(AppModule);

  // 유효성 검사용 파이프 만들기
  app.useGlobalPipes(
    // ValidationPipe : 유효성 검사 해줌
    new ValidationPipe({

      // 이상한 값 못 보내게 만듦
      whitelist : true,
      forbidNonWhitelisted : true,
      // 사용자가 원하는 타입으로 변경 가능
      transform : true,
    }));
  await app.listen(3000);
}
bootstrap();

// main.ts가 모든 걸 시작