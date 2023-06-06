import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DATABASE_HOST'),
      port: this.config.get<number>('DATABASE_PORT'),
      database: this.config.get<string>('DATABASE_NAME'),
      username: this.config.get<string>('DATABASE_USER'),
      password: this.config.get<string>('DATABASE_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      //migrations: ['dist/migrations/*.{ts,js}'],
      //migrationsTableName: 'typeorm_migrations',
      //logger: 'file',
      synchronize: true, // never use TRUE in production!
    };
  }
}

// export const typeOrmAsyncConfig : TypeOrmModuleOptions = {
//   useFactory : async (config : ConfigService):Promise<TypeOrmModuleOptions> => {
//     return{
//       type: 'postgres',
//       host: process.env.DATABASE_HOST,
//       port: process.env.DATABASE_PORT,
//       database: process.env.DATABASE_NAME,
//       username: process.env.DATABASE_USER,
//       password: process.env.DATABASE_PASSWORD,
//       entities: ['dist/**/*.entity.{ts,js}'],
//       migrations: ['dist/migrations/*.{ts,js}'],
//       migrationsTableName: 'typeorm_migrations',
//       cli: {
//         migrationDir: `dist/migrations`
//       },
//       extra: {
//         charset: 'utf8mb4_unicode_ci',
//       },
//       logger: 'file',
//       logging: true,
//       synchronize: true, // never use TRUE in production!
//     }
//   }
// }

// export const typeOrmConfig : TypeOrmModuleOptions ={
// }
