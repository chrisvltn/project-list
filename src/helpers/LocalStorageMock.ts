export class LocalStorageMock {
	store: any = {}

	clear = () => this.store = {}
	getItem = (key: string) => this.store[key] || null
	setItem = (key: string, value: string) => this.store[key] = value.toString()
	removeItem = (key: string) => delete this.store[key]
};
