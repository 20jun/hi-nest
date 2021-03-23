import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// url의 Entry Point를 컨트롤함
@Controller('movies')
export class MoviesController {


    constructor(private readonly moviesService : MoviesService) {}
    // 비어있는 get을 쓸건데 이건 라우터를 의미
    @Get() 
        getAll() : Movie[]{
            return this.moviesService.getAll();
        }

        // 무엇인가가 필요하면 우리가 요청해야만 함
        @Get("/:id")
        getOne(@Param('id') movieId : number) : Movie {
            console.log(typeof movieId);
            return this.moviesService.getOne(movieId);
        }

        @Post()
        create(@Body() movieData : CreateMovieDto) {
            return this.moviesService.create(movieData);
        }

        // 어떤 movie인지 알아야되므로
        @Delete(':id')
        remove(@Param('id') movieId : number) {
            return this.moviesService.deleteOne(movieId);
        }

        @Patch(':id')
        patch(@Param('id') movieId : number, @Body() updateData : UpdateMovieDto) {
            return this.moviesService.update(movieId, updateData);
        }
    }

