import { Injectable } from '@nestjs/common';
import Server, { createProxy } from 'http-proxy';
import { Request, Response } from 'express';

@Injectable()
export class ReactService {
  private devProxyServer: Server;
  constructor() {
    this.devProxyServer = createProxy();
  }

  requestReact(request: Request, response: Response) {
    this.devProxyServer.web(request, response, {
      target: 'http://localhost:3000',
    });
  }
}
