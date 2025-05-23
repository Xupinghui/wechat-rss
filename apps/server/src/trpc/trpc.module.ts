import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { PrismaModule } from '@server/prisma/prisma.module';
import { ImageService } from '@server/utils/image.service';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [TrpcService, TrpcRouter, ImageService],
  exports: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
