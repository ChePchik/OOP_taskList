import "./preloader.scss";
import templateHTML from "./preloader.html?raw";
import { Component } from "../component";

export class Preloader extends Component {
	/**
	 * Создает предзагрузчик, который может быть показан или скрыт.
	 * @param {String} placeholderId - ID элемента для вставки предзагрузчика.
	 * @param {Object} props - Свойства компонента.
	 */
	constructor(placeholderId, props) {
		super(placeholderId, props, templateHTML);
	}

	/** Показывает предзагрузчик */
	visiblePreloader() {
		this.refs.pagePreloader.classList.remove("done");
	}

	/** Скрывает предзагрузчик */
	notVisiblePreloader() {
		this.refs.pagePreloader.classList.add("done");
	}
}
