import { MovementType } from "@generated";
import { Type } from "class-transformer";
import { IsEnum, IsInt, IsISO8601, IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreateMovementDto {

    @IsEnum(MovementType, {message: 'El tipo de movimiento no es válido'})
    type!: MovementType

    @IsISO8601({}, {message: 'La fecha no es válida'})
    @Type(() => Date)
    date!: Date

    @IsInt({message: 'La cantidad no es válida'})
    @Min(0, {message: 'La cantidad no puede ser negativa'})
    amount!: number

    @IsNotEmpty({message: 'El precio unitario es obligatorio'})
    @Type(() => Number)
    @IsNumber()
    priceUnit!: number

    @IsNotEmpty({message: 'El precio unitario es obligatorio'})
    @Type(() => Number)
    @IsNumber()
    productoId!: number

    @IsNotEmpty({message: 'El precio unitario es obligatorio'})
    @Type(() => Number)
    @IsNumber()
    userId!: number
}
