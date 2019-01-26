import { Project } from "../../entities/Project";

export function add(project: Project): ProjectAction {
	return {
		type: ActionTypeEnum.PROJECT_ADD,
		project,
	}
}

export function edit(project: Project): ProjectAction {
	return {
		type: ActionTypeEnum.PROJECT_EDIT,
		project,
	}
}

export function remove(projectId: Project['id']): ProjectAction {
	return {
		type: ActionTypeEnum.PROJECT_REMOVE,
		projectId,
	}
}

export type ProjectAction = {
	type: ActionTypeEnum.PROJECT_ADD
	project: Project
} | {
	type: ActionTypeEnum.PROJECT_EDIT
	project: Project
} | {
	type: ActionTypeEnum.PROJECT_REMOVE
	projectId: Project['id']
}

export enum ActionTypeEnum {
	PROJECT_ADD = 'PROJECT_ADD',
	PROJECT_EDIT = 'PROJECT_EDIT',
	PROJECT_REMOVE = 'PROJECT_REMOVE',
}
