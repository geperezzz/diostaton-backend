import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

import { serviceSchema } from 'src/services/dtos/service.dto';
import { packageSchema } from 'src/packages/dtos/package.dto';
import { PackageServiceEntity } from '../entities/package-service.entity';

export const packageServiceSchema = z.object({
  packageId: packageSchema.shape.id,
  serviceId: serviceSchema.shape.id,
  amountContained: z.number().int().positive(),
});

export class PackageServiceDto extends createZodDto(packageServiceSchema) {
  static fromEntity(entity: PackageServiceEntity): PackageServiceDto {
    return packageServiceSchema.parse(entity);
  }
}
