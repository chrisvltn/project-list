import { Parsable } from "../helpers/Parsable";
import { Type } from "../helpers/decorators/class-transformer/Type";

export class Project extends Parsable {

	@Type()
	id: number = Date.now()

	@Type()
	title: string = ''

	@Type()
	description: string = ''

	@Type()
	modified: Date = new Date()

	@Type()
	created: Date = new Date()
}
