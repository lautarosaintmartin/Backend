import { IsEmail, IsInt, IsString, Length } from "class-validator";

export class CreateProviderDto {


    @IsString({message: 'El nombre no es válido.'})
    @Length(3, 255, { message: 'El nombre debe tener al menos 3 caracteres.' })
    name!: string

    @IsEmail({}, {message: 'El correo debe ser válido.'})
    email!: string

    @IsString({message: 'El numero debe ser valido'})
    phone!: string


}
