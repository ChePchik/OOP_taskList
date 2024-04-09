import axios, { CancelToken } from "axios";

export class ApiService {
	constructor(url = "http://localhost:8081/") {
		this.url = url;
		this.cancelToken = CancelToken.source();
	}

	async httpGet(endpoint = "") {
		try {
			// Отменяем предыдущий запрос, если он существует
			this.cancelToken.cancel("Cancelled Ongoing Request");
			// Создаем новый токен отмены для следующего запроса
			this.cancelToken = CancelToken.source();
			// Выполняем GET запрос
			const response = await axios.get(`${this.url}${endpoint}`, {
				cancelToken: this.cancelToken.token,
			});
			// Возвращаем данные ответа
			return response.data;
		} catch (error) {
			// Передаем ошибку в returnErr для обработки
			return this.returnErr(error);
		}
	}

	returnErr(error) {
		if (axios.isCancel(error)) {
			console.log("Request canceled:", error.message);
		} else {
			// Логируем ошибку
			console.error("An error occurred:", error.message);
		}
		// Возвращаем undefined или можно выбросить ошибку, если нужно
		throw error;
	}

	async getUsers(data) {
		try {
			return await this.httpGet(`users`);
		} catch (error) {
			throw error; // Перебрасываем ошибку дальше
		}
	}
}
