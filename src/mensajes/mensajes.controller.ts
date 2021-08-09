import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensaje')
export class MensajesController {
  constructor(private mensajesSvc: MensajesService) {}
  @Post('/create')
  async create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    await this.mensajesSvc
      .createMensaje(createMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la creacion' });
      });
  }

  @Get('/')
  getAll(@Res() response) {
    this.mensajesSvc
      .getAll()
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error en la obtencion de mensajes' });
      });
  }
  @Put(':id')
  udpate(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajesSvc
      .updateMensaje(idMensaje, updateMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error actualizando el mensaje' });
      });
  }
  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajesSvc
      .deleteMensaje(idMensaje)
      .then((res) => {
        response.status(HttpStatus.OK).json({ res });
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'Error eliminando el mensaje' });
      });
  }
}
