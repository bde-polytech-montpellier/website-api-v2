import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsInt, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John Doe', description: "User's name" })
  @IsString()
  name?: string;

  @ApiProperty({ example: 'john.doe@example.com', description: "User's email" })
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 'azerty', description: "User's password" })
  @IsString()
  @Length(6)
  password?: string;

  @ApiProperty({ example: 1, description: "User's role" })
  @IsInt()
  @Min(1)
  role_id?: number;
}
