// import "./app/assets/style/style.scss";
// import { Preloader } from "./app/components/preloader/preloader";
// import template from "./app/components/template.html?raw";

// document.addEventListener("DOMContentLoaded", function () {
// 	// Создаем экземпляр предзагрузчика
// 	document.getElementById("app").outerHTML = template;
// 	const preloader = new Preloader("preloaderContainer");

// 	// Показываем предзагрузчик
// 	preloader.visiblePreloader();
// 	setTimeout(() => {
// 		// Скрываем предзагрузчик
// 		preloader.notVisiblePreloader();
// 		console.log(1);
// 	}, 3000);

// 	initializeComponents();
// });

// const initializeComponents = () => {
// };
import "./app/assets/style/style.scss";
import { Preloader } from "./app/components/preloader/preloader";
import { TaskManager } from "./app/components/task/TaskManager";
import template from "./app/components/template.html?raw";

class Main {
	constructor() {
		document.addEventListener("DOMContentLoaded", this.onDOMContentLoaded.bind(this));
	}

	onDOMContentLoaded() {
		// Вставляем шаблон приложения в элемент с ID 'app'
		document.getElementById("app").outerHTML = template;

		// Создаем экземпляр предзагрузчика и показываем его
		this.preloader = new Preloader("preloaderContainer");
		// this.preloader.visiblePreloader();
		// Имитируем загрузку данных и скрываем предзагрузчик
		// setTimeout(() => {
		// 	this.preloader.notVisiblePreloader();
		// 	console.log(1);
		// }, 3000);

		// Инициализируем остальные компоненты приложения
		this.initializeComponents();
	}

	initializeComponents() {
		this.tasks = new TaskManager("task");
		// Логика инициализации других компонентов приложения
	}
}

// Создаем экземпляр приложения
new Main();
