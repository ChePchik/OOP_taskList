import { Component } from "../component";
import "./task.scss";
import templateHTML from "./task.html?raw";
import { Task } from "./Task";

export class TaskManager extends Component {
	constructor(placeholderId, props) {
		super(placeholderId, props, templateHTML);
		this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

		this.init();
	}

	init() {
		this.refs.newTask.addEventListener("click", (e) => this.addTask());
		this.displayTasks();
	}

	displayTasks() {
		const tasksList = this.refs.tasksList;
		tasksList.innerHTML = ""; // Очистить текущий список
		this.tasks.forEach((task) => {
			const taskElement = document.createElement("li");
			taskElement.textContent = task.title;
			taskElement.onclick = () => this.toggleCompleted(task.id);
			tasksList.appendChild(taskElement);

			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.onclick = (e) => {
				e.stopPropagation(); // Предотвращаем срабатывание onclick родителя
				this.deleteTask(task.id);
			};
			taskElement.appendChild(deleteButton);
		});
	}

	toggleCompleted(id) {
		const task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.isCompleted = !task.isCompleted;
			this.updateLocalStorage();
			this.displayTasks();
		}
	}

	addTask() {
		const title = this.refs.newTaskInput.value;
		if (!taskInput.value) {
			// валидация
			return 0;
		}

		const id = Date.now();
		const newTask = new Task(id, title);
		this.tasks.push(newTask);
		this.updateLocalStorage();
		this.displayTasks();
		this.refs.newTaskInput.value = "";
	}

	updateLocalStorage() {
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
		console.log("🚀 ~ TaskManager ~ updateLocalStorage ~ this.tasks:", this.tasks);
	}

	getTasks() {
		return this.tasks;
	}

	toggleCompleted(id) {
		const task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.isCompleted = !task.isCompleted;
			this.updateLocalStorage();
		}
	}

	deleteTask(id) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
		this.updateLocalStorage();
		this.displayTasks();
	}
}
