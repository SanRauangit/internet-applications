export class ElixirsList {
    constructor(container, onSelect) {
        this.container = container;
        this.onSelect = onSelect;
    }

    showMessage(text) {
        this.container.textContent = text;
    }

    render(elixirs) {
        if (elixirs.length === 0) {
            this.showMessage('No elixirs found.');
            return;
        }

        const list = document.createElement('ul');
        for (const elixir of elixirs) {
            const item = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = elixir.name;
            button.addEventListener('click', () => {
                this.onSelect(elixir.id);
            });
            item.append(button);
            list.append(item);
        }

        this.container.textContent = '';
        this.container.append(list);
    }
}