import { IsNumber, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from "./create-movie.dto";

// 부분 타입
export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    
}