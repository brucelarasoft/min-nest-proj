import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreasRepository } from './areas.repository';
import { SubareasRepository } from './subareas.repositiory';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoLoadEntities: true,
        synchronize: true,
        logging: 'all',
        ssl: true,
        extra: {
          trustServerCertificate: true,
          Encrypt: true,
          IntegratedSecurity: false,
        },
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT')),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD').toString(),
        database: configService.get('DB_DATABASE').toString(),
        schema: configService.get('DB_SCHEMA'),
      }),
    }),
    TypeOrmModule.forFeature([AreasRepository, SubareasRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
