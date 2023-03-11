import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Length } from 'class-validator';

export class CreateClubDto {
  @ApiProperty({
    title: 'Name',
    example: 'My awesome club',
  })
  @IsString()
  @Length(3, 255)
  name: string;

  @ApiProperty({
    title: 'Description',
    example: 'lorem ipsum',
  })
  @IsString()
  @Length(3, 500)
  summary: string;

  @ApiProperty({
    title: 'Picture',
    example: 'https://my-image.com',
  })
  @IsUrl()
  picture?: string;

  @ApiProperty({
    title: 'Description',
    example: 'lorem ipsum dolor sit amet',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Facebook page',
    example: 'https://facebook.com/mypage',
    required: false,
  })
  @IsUrl()
  facebook?: string;

  @ApiProperty({
    title: 'Instagram page',
    example: 'https://instagram.com/mypage',
    required: false,
  })
  @IsUrl()
  instagram?: string;
}
