import { PartialType } from '@nestjs/swagger';
import { CreateGoodieDto } from './create-goodie.dto';

export class UpdateGoodieDto extends PartialType(CreateGoodieDto) {}
