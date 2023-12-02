'use strict';

{
	const push = document.getElementById('push');
	const Lottery = document.getElementById('Lottery');

	push.addEventListener('click', () => {
		const Lotterys = ['img/pickup1.jpg', 'img/pickup2.jpg', 'img/pickup3.jpg']
		const n = Math.floor(Math.random() * Lotterys.length);

		Lottery.src = Lotterys[n];

		// switch (n) {
		// 	case 0:
		// 		Lottery.textContent = 'chicken curry';
		// 		break;
		// 	case 1:
		// 		Lottery.textContent = 'vegetable curry';
		// 		break;
		// 	case 2:
		// 		Lottery.textContent = 'seafood curry';
		// 		break;
		// }
	});
}