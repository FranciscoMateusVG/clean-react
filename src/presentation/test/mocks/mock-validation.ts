import { Validation } from '../../protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string
  fieldValue: string
  fieldName: string
  validate(fieldName: string, fieldValue: string): string {
    this.fieldValue = fieldValue
    this.fieldName = fieldName
    return this.errorMessage
  }
}
