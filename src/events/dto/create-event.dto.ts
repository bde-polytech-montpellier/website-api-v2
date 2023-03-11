import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Length, IsDate } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({
    title: 'Name',
    example: 'Event 1',
  })
  @IsString()
  @Length(3, 255)
  name: string;

  @ApiProperty({
    title: 'Summary',
    example: "Let's have fun together",
  })
  @IsString()
  @Length(3, 255)
  summary: string;

  @ApiProperty({
    title: 'Picture',
    example: 'https://example.com/picture.jpg',
    required: false,
  })
  @IsUrl()
  picture?: string;

  @ApiProperty({
    title: 'Description',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Begin date',
    example: '2021-01-01T15:00:00',
    required: false,
  })
  @IsDate()
  begin_date?: Date;

  @ApiProperty({
    title: 'End date',
    example: '2021-01-02T00:00:00',
    required: false,
  })
  @IsDate()
  end_date?: Date;

  @ApiProperty({
    title: 'Location',
    example: 'Montpellier',
    required: false,
  })
  @IsString()
  location?: string;

  @ApiProperty({
    title: 'Approximative date',
    example: 'Mid-June',
    required: false,
  })
  @IsString()
  spacetime?: string;

  @ApiProperty({
    title: 'Standard price',
    description: 'Price for non-members',
    example: 10,
    required: false,
  })
  standard_price?: number;

  @ApiProperty({
    title: 'Reduced price',
    description: 'Price for members',
    example: 5,
    required: false,
  })
  reduced_price?: number;

  @ApiProperty({
    title: 'Club ID',
    description: 'ID of the club organizing the event, if there is one',
    example: 'af8a9025-9a80-4bd3-bf5c-3a18405d9730',
    required: false,
  })
  club_id?: string;
}
