// updateData, movieData 한테 타입을 부여하기 위해서 DTO 만듦.
// DTO : Data Transfer Object(데이터 전송 객체)

import { IsNumber, IsOptional, IsString } from "class-validator";

// DTO를 쓰는 이유 : 코드를 더 간결, NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 해준다.
export class CreateMovieDto {

    @IsString()
    readonly title : string;
    
    @IsNumber()
    readonly year : number;

    @IsOptional()
    @IsString({ each : true })
    readonly genres : string[];
}