import { PartialType } from '@nestjs/swagger';
import { CreateGoodyDto } from './create-goody.dto';

export class UpdateGoodyDto extends PartialType(CreateGoodyDto) {}
