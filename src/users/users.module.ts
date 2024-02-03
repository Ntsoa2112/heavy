import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CatsModule } from 'src/cats/cats.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [CatsModule]
})
export class UsersModule {}
