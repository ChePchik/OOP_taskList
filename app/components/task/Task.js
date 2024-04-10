export class Task {
	constructor(id, title, isCompleted = false, priority = "medium") {
		this.id = id;
		this.title = title;
		this.isCompleted = isCompleted;
		this.priority = priority;
	}
}
