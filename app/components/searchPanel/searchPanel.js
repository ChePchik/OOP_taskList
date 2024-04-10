import "./searchPanel.scss";
import templateHTML from "./searchPanel.html?raw";
import { Component } from "../component";

export class SearchPanel extends Component {
	/**
	 * Создает предзагрузчик, который может быть показан или скрыт.
	 * @param {String} placeholderId - ID элемента для вставки предзагрузчика.
	 * @param {Object} props - Свойства компонента.
	 */
	constructor(placeholderId, props) {
		super(placeholderId, props, templateHTML);
		this.taskManager = props.data.taskManager;
		// Настройка слушателя событий для поля ввода
		const searchInput = this.refs.searchInput;

		searchInput.addEventListener("input", this.handleSearchInput.bind(this));
	}

	handleSearchInput(event) {
		const searchTerm = event.target.value;
		const filteredTasks = this.taskManager.searchTasks(searchTerm);
		// Обновление UI с filteredTasks
		this.updateTaskDisplay(filteredTasks);
	}

	updateTaskDisplay(filteredTasks) {
		// Логика для обновления отображения задач на основе результатов поиска
		const tasksContainer = this.taskManager.refs.tasksList;
		console.log("🚀 ~ SearchPanel ~ updateTaskDisplay ~ this.taskManager:", this.taskManager);

		tasksContainer.innerHTML = ""; // Очистить текущее отображение задач

		filteredTasks.forEach((task) => {
			const taskElement = document.createElement("li");
			taskElement.textContent = task.title;
			taskElement.onclick = () => this.taskManager.toggleCompleted(task.id);
			tasksList.appendChild(taskElement);

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.onclick = (e) => {
				e.stopPropagation(); // Предотвращаем срабатывание onclick родителя
				this.taskManager.deleteTask(task.id);
			};
			taskElement.appendChild(deleteButton);
		});
		// // Добавление отфильтрованных задач в контейнер
		// filteredTasks.forEach((task) => {
		// 	const taskElement = document.createElement("div");
		// 	taskElement.textContent = task.title; // Простое текстовое отображение задачи
		// 	// Дополнительно можно установить классы или идентификаторы, если это необходимо для стилизации или функциональности
		// 	tasksContainer.appendChild(taskElement);
		// });
	}
}
// class TaskSearch {
//   constructor(taskManager) {
//     this.taskManager = taskManager;
//   }

//   search(query) {
//     const tasks = this.taskManager.getTasks();
//     return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
//   }
// }
