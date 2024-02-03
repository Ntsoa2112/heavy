import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    
    @Get('ab*cd')
    findAll(@Req() request: Request) {
      console.log('This action returns all cats');
      return 'This action returns all cats';
    }

    @Get()
    async findAllCats(): Promise<CreateCatDto[]> {
      return this.catsService.findAll()
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
      return 'This action add cats';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version: string) {
    console.log('TEST')
      if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
      }
    }

    @Get('find/:id')
    findOneId(@Param('id') id: string): string {
      return `This action findOneId returns a #${id} cat`;
    }


    @Get(':id')
    findOne(@Param() params: {id: number}): string {
      console.log(params.id);
      return `This action returns a #${params.id} cat`;
    }
    
}
