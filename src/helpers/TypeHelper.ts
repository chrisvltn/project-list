import moment from 'moment'

export class TypeHelper {

	static object(item: any, padrao: any = {}): any {
		return typeof item == "object" ? item : padrao
	}

	static any(item: any, padrao: any = {}): any {
		return TypeHelper.object(item, padrao)
	}

	static string(item: any, padrao: string = '', semAcento = false): string {
		let ret = (item || padrao).toString()
		if (semAcento) {
			ret = ret.replace(/[àáâãä]/g, 'a')
				.replace(/[éèêë]/g, 'e')
				.replace(/[íìîï]/g, 'i')
				.replace(/[õóòõö]/g, 'o')
				.replace(/[úùü]/g, 'u')
				.replace(/[ç]/g, 'c')
				.replace(/[ñ]/g, 'n')
		}
		return ret
	}

	static Date(item: any, padrao: Date = new Date(0)): Date {
		if (typeof item == 'string') {
			item = item.length <= 11 ? item.trim() + ' 12:00:00' : item
		}

		const d = moment(item).toDate()
		return isNaN(d.getFullYear()) ? padrao : d
	}

	static number(item: any, padrao: number = 0): number {
		return (parseFloat(item) || padrao)
	}

	static boolean(item: any, padrao: boolean = false): boolean {
		if (typeof item == 'boolean') return item

		try {
			const res = JSON.parse(item)
			if (typeof res == 'number') return res > 0
			if (typeof res != 'boolean') return padrao
			return res
		} catch (e) {
			return padrao
		}
	}

	static array(item: any, padrao: any = []): any[] {
		return Array.isArray(item) ? item : padrao
	}

	static encode(...args: (number | string)[]): number {
		return <number>args.reduce((n, item) => {
			const itemNumber: number = typeof item == 'string' ?
				item.split('').reduce((n, letter) => n + letter.charCodeAt(0), 0) :
				item;
			return parseInt(n.toString() + itemNumber.toString())
		}, '')
	}
}
