import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    // 테스팅 어플리케이션도 실제 어플리케이션처럼 작동하도록 설정해주어야 함!
    app.useGlobalPipes(
      // ValidationPipe : 유효성 검사 해줌
      new ValidationPipe({
  
        // 이상한 값 못 보내게 만듦
        whitelist : true,
        forbidNonWhitelisted : true,
        // 사용자가 원하는 타입으로 변경 가능
        transform : true,
      }));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });


  describe('/movies', () => {
    it("GET", () => {
      return request(app.getHttpServer())
      .get("/movies")
      .expect(200)
      .expect([]);
    });
    it("POST", () => {
      return request(app.getHttpServer())
      .post("/movies")
      .send({
        title : "Test",
        year : 2000,
        genres : ['test'],
      })
      .expect(201);
    });
    it("POST 400", () => {
      return request(app.getHttpServer())
      .post("/movies")
      .send({
        title : "Test",
        year : 2000,
        genres : ['test'],
        other : "thing",
      })
      .expect(400);
    });
    it("DELETE", () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it("GET 200", () => {
      return request(app.getHttpServer())
      .get("/movies/1")
      .expect(200);
    });
    it("GET 404", () => {
      return request(app.getHttpServer())
      .get("/movies/999")
      .expect(404);
    });
    it("PATCH", () => {
      return request(app.getHttpServer())
      .patch('/movies/1')
      .send({title : "Updated Test"})
      .expect(200);
    });
    it("DELETE 200", () => {
      return request(app.getHttpServer())
      .delete('/movies/1')
      .expect(200);
    });
  });
});
