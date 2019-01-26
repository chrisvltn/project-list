import { Project } from "../../entities/Project";
import { ActionTypeEnum, ProjectAction } from "../actions/projects";

export function projects(state: Project[] = [], action: ProjectAction) {
	switch (action.type) {
		case ActionTypeEnum.PROJECT_ADD:
			return [...state, action.project]

		case ActionTypeEnum.PROJECT_EDIT:
			const index = state.map(project => project.id).indexOf(action.project.id)
			if (index == -1) return state

			const newState = [...state]
			newState[index] = action.project
			return newState

		case ActionTypeEnum.PROJECT_REMOVE:
			return state.filter(project => project.id !== action.projectId)
	}

	return state
}

