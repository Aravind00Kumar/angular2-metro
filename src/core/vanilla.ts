export class Vanilla {
	constructor(private element?: any) {
	}

	public load(context, fn) {
		if (document.readyState != 'loading') {
			fn.call(context);
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	public addClass(className) {
		if (this.element.classList)
			this.element.classList.add(className);
		else
			this.element.className += ' ' + className;
	}
	public removeClass(className) {
		if (this.element.classList)
			this.element.classList.remove(className);
		else
			this.element.className = this.element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}

	public attr(attribute, value) {
		if (value === undefined)
			return this.element.getAttribute(attribute);
		this.element.setAttribute(attribute, value);
	}

	public css(attribute, value){
		this.element.style.attribute = value;
	}

}