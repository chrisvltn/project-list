import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store/store'
import { Router } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import { Project } from './entities/Project';
import ProjectItem from './components/ProjectItem/ProjectItem';
import { createBrowserHistory } from 'history';
import Adapter from 'enzyme-adapter-react-16';
import { save, list } from './services/ProjectService';
import { add } from './store/actions';
import { ProjectForm } from './routes/ProjectListing/Form/ProjectForm';
import { LocalStorageMock } from './helpers/LocalStorageMock';

(global as any).localStorage = new LocalStorageMock()
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should not create a new Project when editing', () => {
	const history = createBrowserHistory()
	const wrapper = mount(
		<Provider store={store}>
			<Router history={history} >
				<App />
			</Router>
		</Provider>
	)

	save(Project.parse({ id: 1 }))
	save(Project.parse({ id: 2 }))
	save(Project.parse({ id: 3 }))
	list().forEach(project => store.dispatch(add(project)))
	wrapper.update()
	wrapper.find(ProjectItem).first().find('button').first().simulate('click')
	wrapper.find(ProjectForm).find('form').simulate('submit')
	expect(wrapper.find(ProjectItem)).toHaveLength(3)
})
