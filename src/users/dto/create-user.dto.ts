import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString, Length, Min } from 'class-validator';

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

  @ApiProperty({ example: 1, description: "User's role" })
  @IsInt()
  @Min(1)
  role_id: number;
}
