import React from 'react';
import ProjectForm from './ProjectForm';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../../store/store'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should validate inputs and disable submit button', () => {
	const wrapper = mount(
		<Provider store={store}>
			<HashRouter>
				<ProjectForm />
			</HashRouter>
		</Provider>
	)

	wrapper.find('input[name="title"]').simulate('change')
	wrapper.find('textarea[name="description"]').simulate('change')

	wrapper.update()

	expect(wrapper.find('input[name="title"]').hasClass('b--red')).toBeTruthy()
	expect(wrapper.find('textarea[name="description"]').hasClass('b--red')).toBeTruthy()
	expect(wrapper.find('button[type="submit"][disabled]').length).toEqual(1)
});
