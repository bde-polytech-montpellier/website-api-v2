import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubsModule } from './clubs/clubs.module';
import { PartnersModule } from './partners/partners.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { GoodiesModule } from './goodies/goodies.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ClubsModule,
    PartnersModule,
    EventsModule,
    UsersModule,
    GoodiesModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
