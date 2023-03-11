import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUUID, Length, IsInt, Min } from 'class-validator';

export class TokenPayloadDto {
  @ApiProperty({
    example: 'b56ed8bb-6ca6-4682-8e21-d3a3875b2b2d',
    description: 'User ID',
  })
  @IsUUID()
  sub: string;

  @ApiProperty({ example: 'John Doe', description: "User's name" })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@example.fr', description: "User's email" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 1, description: "User's role id" })
  @IsInt()
  @Min(0)
  role_id: number;

  @ApiProperty({ example: 'user', description: "User's role name" })
  @IsString()
  @Length(3, 255)
  role_name: string;
}
