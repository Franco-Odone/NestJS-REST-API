import { TaskStatus } from '../task.entity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
} from 'class-validator';

// DTO para validar lo que venga del body
// Los DTO son datos que se están transfiriendo desde el cliente al servidor
export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  description: string;
}
// Los ? son para que TS sepa que algunos datos pueden ser indefinidos
export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  // Para que se valide con los datos entregados en el enum
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
