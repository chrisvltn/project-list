import React from 'react';
import ProjectList from './ProjectList';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from '../../../store/store'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Project } from '../../../entities/Project';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { ProjectForm } from '../Form/ProjectForm';
import { createBrowserHistory } from 'history';
import { LocalStorageMock } from '../../../helpers/LocalStorageMock';
import { save, list } from '../../../services/ProjectService';
import { add } from '../../../store/actions';

(global as any).localStorage = new LocalStorageMock()

configure({ adapter: new Adapter() });

it('should render all projects', () => {
	const history = createBrowserHistory()
	const wrapper = mount(
		<Provider store={store}>
			<Router history={history} >
				<ProjectList />
			</Router>
		</Provider>
	)

	save(Project.parse({ id: 1 }))
	save(Project.parse({ id: 2 }))
	save(Project.parse({ id: 3 }))

	list().forEach(project => store.dispatch(add(project)))

	wrapper.update()

	expect(wrapper.find(ProjectItem)).toHaveLength(3)
})
