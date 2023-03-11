import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: "User's name" })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: "User's email" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'azerty', description: "User's password" })
  @IsString()
  @Length(6)
  password: string;
}
