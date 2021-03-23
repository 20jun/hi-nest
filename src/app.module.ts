import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// 데코레이터 : 클래스에 함수 기능을 추가할 수 있음
@Module({
  imports: [MoviesModule],
  // 컨트롤러 : url을 가져오고 함수를 실행
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

// 앱 모듈은 모든 것의 루트 모듈 같은 거임
// 모듈 : 어플리케이션의 일부분, 한 가지의 역할을 하는 앱

// 컨트롤러는 url을 가져오고 function을 리턴
// 서비스에는 function을 놓음
// 서비스는 사실 비지니스 로직을 실행하는 역할 
// 컨트롤러에 모든 url을 다 넣어놓고, 서비스는 필요하다면 데이터베이스에 연락하는거야