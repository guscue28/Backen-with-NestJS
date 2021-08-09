import { Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
//import { Mensaje } from './schemas/mensajes.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MensajeInterface } from './interface/mensajes.interface';

@Injectable()
export class MensajesService {
  constructor(
    @InjectModel('Mensaje')
    private readonly mensajeModel: Model<MensajeInterface>,
  ) {}

  async getAll(): Promise<MensajeInterface[]> {
    return await this.mensajeModel.find();
  }

  async getOne(idMensaje: string): Promise<MensajeInterface> {
    return await this.mensajeModel.findById(idMensaje);
  }

  async createMensaje(
    mensajeNuevo: CreateMensajeDto,
  ): Promise<MensajeInterface> {
    const nuevo = new this.mensajeModel(mensajeNuevo);
    return await nuevo.save();
  }

  async updateMensaje(
    idMensaje: string,
    mensajeActualizar: CreateMensajeDto,
  ): Promise<MensajeInterface> {
    const mensajeUpdated = await this.mensajeModel.findByIdAndUpdate(
      idMensaje,
      mensajeActualizar,
      { new: true },
    );
    return mensajeUpdated;
  }

  async deleteMensaje(idMensaje: number): Promise<MensajeInterface> {
    return await this.mensajeModel.findByIdAndDelete(idMensaje);
  }
}
