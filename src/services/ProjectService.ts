import { Project } from "../entities/Project";

const STORAGE_KEY = 'project_list'

export function list(): Project[] {
	const items: any[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
	return Project.parse(items)
}

export function remove(projectId: Project['id']): void {
	const projects = list()
	const index = projects.findIndex(item => item.id === projectId)
	projects.splice(index, 1)
	const json = JSON.stringify(projects)
	localStorage.setItem(STORAGE_KEY, json)
}

export function save(project: Project): {
	saved: boolean
	isNew: boolean
} {
	const projects = list()

	const index = projects.findIndex(item => item.id == project.id)
	if (index > -1) projects[index] = project
	else projects.push(project)

	const json = JSON.stringify(projects)
	localStorage.setItem(STORAGE_KEY, json)

	return {
		saved: true,
		isNew: index == -1,
	}
}
