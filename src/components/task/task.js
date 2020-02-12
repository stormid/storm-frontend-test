import Vue from 'vue/dist/vue.common.js';
import axios from 'axios';

let template =
/*html*/`<li>{{ title }}</li>`;

export let Task = {
	props: ['title'],
	template: template,
};
