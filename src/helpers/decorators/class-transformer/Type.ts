import { Type as Original, TypeOptions, plainToClass, Transform } from "class-transformer";
import 'reflect-metadata'
import { TypeHelper } from "../../TypeHelper";

export function Type(typeFunction?: (type?: TypeOptions) => Function) {
	if (typeFunction) return Original.apply(this, arguments)
	return function (target, key) {
		const type = Reflect.getMetadata('design:type', target, key)
		switch (type) {
			case Number:
				return Transform(data => TypeHelper.number(data))(target, key)
			case String:
				return Transform(data => TypeHelper.string(data))(target, key)
			case Date:
				return Transform(data => TypeHelper.Date(data))(target, key)
			case Boolean:
				return Transform(data => TypeHelper.boolean(data))(target, key)
			case Array:
				return Transform(data => TypeHelper.array(data))(target, key)
			default:
				return Transform(data => plainToClass(type, data))(target, key)
		}
	}
}
