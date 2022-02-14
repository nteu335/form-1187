import njk from './njk.js';

const params = Object.fromEntries(new URLSearchParams(location.search));
window.foo = params;

console.log(params);

window.onload = function() {
	const $e = document.querySelector('html');
	njk.render('index.njk', params, (err, html) => $e.innerHTML = err && err.message || html);
};
