'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab');
	const about = document.querySelector('.tabs-wrapper');
	const articles = document.querySelectorAll('.content');

	about.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		if (id) {
			tabs.forEach((tab) => tab.classList.remove('tab_active'));
			e.target.classList.add('tab_active');
			articles.forEach((article) => article.classList.remove('content_active'));
			document.getElementById(id).classList.add('content_active');
		}
	});
});
