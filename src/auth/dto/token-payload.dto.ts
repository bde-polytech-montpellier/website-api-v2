import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail, IsInt, Min } from 'class-validator';

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

  @ApiProperty({ example: 1, description: "User's role" })
  @IsInt()
  @Min(1)
  role_id: number;
}
