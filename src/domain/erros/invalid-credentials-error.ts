export class InvalidCredentialsError extends TypeError {
  constructor() {
    super('Credenciais Inválidas')
    this.name = this.constructor.name
  }
}
