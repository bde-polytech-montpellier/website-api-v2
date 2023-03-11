import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, MaxLength, IsEmail } from 'class-validator';
export class CreatePartnerDto {
  @ApiProperty({
    title: 'Name',
    example: 'NestJS',
  })
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    title: 'Summary',
    example: 'NestJS is a progressive Node.js framework [...]',
  })
  @IsString()
  @MaxLength(500)
  summary: string;

  @ApiProperty({
    title: 'Picture',
    example: 'https://nestjs.com/img/logo_text.svg',
    required: false,
  })
  @IsUrl()
  picture?: string;

  @ApiProperty({
    title: 'Description',
    example: 'NestJS is a progressive Node.js framework [...]',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Email',
    example: 'abc.edf@ghi.com',
    required: false,
  })
  @IsEmail()
  email?: string;

  @ApiProperty({
    title: 'Website',
    example: 'https://nestjs.com',
    required: false,
  })
  @IsUrl()
  website?: string;
}
