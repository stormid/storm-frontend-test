import Vue from 'vue/dist/vue.common.js';
import axios from 'axios';

let template =
/*html*/`<li>{{ $data.title }}</li>`;

export let Task = {
	data: {
		title: 'test'
	},
	template: template,
};
