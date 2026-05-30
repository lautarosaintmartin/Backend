import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovementsService {
  constructor(private prismaService: PrismaService) { }

  async create(createMovementDto: CreateMovementDto) {

    try {

      return await this.prismaService.movement.create({
        data: {
          ...createMovementDto,
          date: new Date(createMovementDto.date),
        },
            include: {
                user: true,
                product: true,
            }
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findAll() {
    try {
      return await this.prismaService.movement.findMany({
            include: {
                user: true,
                product: true,
            }
        }
      );

    }catch(error){
      console.log(error)
      throw error
    }
    }

    
  async findOne(id: number) {
    try {
      return await this.prismaService.movement.findUnique(
        {
          where: {
            id: id
          }
        }
      );
    } catch (error) {
      console.log(error)
      throw error
    }
  }

    async update(id: number, updateMovementDto: UpdateMovementDto) {
      const movement = await this.findOne(id)
  
      try {

        return await this.prismaService.movement.update({
          where: {
            id,
          },
          data: updateMovementDto
  
        })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  
      async remove(id: number) {
    try {
      return await this.prismaService.movement.delete({
        where: {
          id,
        }
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}