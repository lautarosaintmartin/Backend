import { Type } from "class-transformer"
import { IsString, Length, MinLength } from "class-validator"
import { IsEmail, IsNumber} from "class-validator"


export class CreateCategoryDto {
    
    @IsString({message: 'El nombre debe ser texto.'})
    @Length(3, 255, { message: 'El nombre debe tener entre 3 y 255 caracteres.' })
    name!: string

    @IsString({ message: 'La categoria no es valida.'})
    @Length(3, 255, { message: 'La categoria debe tener entre 3 a 255 caracteres.' })
    description!: string

}