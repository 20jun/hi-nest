import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// url의 Entry Point를 컨트롤함
@Controller('movies')
export class MoviesController {

    // 비어있는 get을 쓸건데 이건 라우터를 의미
    @Get() 
        getAll() {
            return "This will return all movies";
        }

        @Get('search')
        search(@Query("year") searchingYear : string) {
            return `We are searching for a movie made after : ${searchingYear}`;
        }

        // 무엇인가가 필요하면 우리가 요청해야만 함
        @Get("/:id")
        // id라는 parameter를 string 타입의 movieId라는 argument에 저장
        getOne(@Param("id") movieId : string) {
            return `This will return one movie with the id : ${movieId}`
        }

        @Post()
        create(@Body() movieData) {
            console.log(movieData);
            // return "This will create a movie";
            return movieData;
        }

        // 어떤 movie인지 알아야되므로
        @Delete("/:id")
        remove(@Param('id') movieId : string) {
            return `This will delete a movie with the id : ${movieId}`;
        }

        @Patch('/:id')
        patch(@Param('id') movieId : string, @Body() updateData) {
            return {
                updateMovie : movieId,
                ...updateData,
            };
        }
    }

