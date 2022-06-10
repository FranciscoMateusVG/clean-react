export class UnexpectedError extends TypeError {
  constructor() {
    super('Algo de errado aconteceu. Tente novamente mais tarde.')
    this.name = this.constructor.name
  }
}
