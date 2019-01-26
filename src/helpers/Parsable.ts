import 'reflect-metadata';
import { plainToClass } from "class-transformer";

export abstract class Parsable {
	static parse<T>(this: Constructor<T>, obj?: ObjectKeys<T>): T;
	static parse<T>(this: Constructor<T>, obj?: ObjectKeys<T>[]): T[];
	static parse<T>(this: Constructor<T>, obj?: ObjectKeys<T> | ObjectKeys<T>[]): (T | T[]) {
		return plainToClass(this, obj || {}) as (T | T[])
	}
}

type ObjectKeys<T> = {
	[P in keyof T]?: T[P]
}

type Constructor<T> = new () => T
