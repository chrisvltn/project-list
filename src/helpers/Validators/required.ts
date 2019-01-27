import { Validator } from "./Validator";

export const required: Validator = value => !value.trim() ? { required: true } : null
