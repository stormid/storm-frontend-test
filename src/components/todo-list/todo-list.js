import Vue from 'vue/dist/vue.common.js';
import axios from 'axios';

import { Task } from '../task/task.js';

let template =
/*html*/`<ul></ul>`;

export let ToDo = {
	data: {
		tasks: []
	},
	mounted () {
		axios
		.get('http://localhost:4000/api/task')
		.then((response) => {
			this.tasks = response.data;
			console.log(this.tasks);
		})
		.catch((error) => {
			console.log('error - unable to load data file');
			console.log(error);
		});	
	},
	components: {
		Task
	},
	template: template,
};
