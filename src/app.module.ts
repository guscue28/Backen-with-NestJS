import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensaje } from './mensajes/schemas/mensajes.schemas';
import { MensajesService } from './mensajes/mensajes.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/portafolio'),
    MongooseModule.forFeature([{ name: 'Mensaje', schema: Mensaje }]),
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
