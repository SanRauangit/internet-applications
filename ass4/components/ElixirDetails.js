export class ElixirDetails {
    constructor(container) {
        this.container = container;
    }

    showMessage(text) {
        this.container.textContent = text;
    }

    render(elixir) {
        this.container.textContent = '';

        const title = document.createElement('h2');
        title.textContent = elixir.name;
        this.container.append(title);

        const ingredients = (elixir.ingredients || []).map(item => item.name).join(', ');
        const inventors = (elixir.inventors || [])
            .map(person => [person.firstName, person.lastName].join(' ').trim())
            .join(', ');

        this.addField('Difficulty', elixir.difficulty);
        this.addField('Effect', elixir.effect);
        this.addField('Side effects', elixir.sideEffects);
        this.addField('Characteristics', elixir.characteristics);
        this.addField('Time', elixir.time);
        this.addField('Manufacturer', elixir.manufacturer);
        this.addField('Ingredients', ingredients);
        this.addField('Inventors', inventors);
    }

    addField(label, value) {
        if (!value) {
            return;
        }
        const paragraph = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = `${label}: `;
        paragraph.append(strong, value);
        this.container.append(paragraph);
    }
}