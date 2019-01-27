export type Validator = (value: string) => Validation
export type Validation = null | { [key: string]: any }
