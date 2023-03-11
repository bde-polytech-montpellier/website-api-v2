import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsUrl, IsNumber } from 'class-validator';

export class CreateGoodieDto {
  @ApiProperty({
    title: 'Name',
    example: 'My awesome goody',
  })
  @IsString()
  @Length(3, 255)
  name: string;

  @ApiProperty({
    title: 'Description',
    example: 'lorem ipsum dolor sit amet',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Picture',
    example: 'https://my-image.com',
    required: false,
  })
  @IsUrl()
  picture?: string;

  @ApiProperty({
    title: 'Standard Price',
    description: 'Price for non-members',
    example: 10,
    required: false,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    title: 'Reduced price',
    description: 'Price for members',
    example: 5,
    required: false,
  })
  @IsNumber()
  reduced_price: number;
}
