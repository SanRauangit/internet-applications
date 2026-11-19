import { ElixirApi } from './services/api.js';
import { SearchBar } from './components/SearchBar.js';
import { DifficultyFilter } from './components/DifficultyFilter.js';
import { ElixirsList } from './components/ElixirsList.js';
import { ElixirDetails } from './components/ElixirDetails.js';

class App {
    constructor() {
        this.api = new ElixirApi();
        this.elixirs = [];
        this.searchText = '';
        this.difficulty = '';

        this.list = new ElixirsList(
            document.querySelector('#elixir-list'),
            id => this.showDetails(id)
        );
        this.details = new ElixirDetails(document.querySelector('#elixir-details'));
        this.filter = new DifficultyFilter(
            document.querySelector('#difficulty-select'),
            value => {
                this.difficulty = value;
                this.showList();
            }
        );
        this.searchBar = new SearchBar(
            document.querySelector('#search-input'),
            text => {
                this.searchText = text.toLowerCase();
                this.showList();
            }
        );
    }

    async loadElixirs() {
        this.list.showMessage('Loading elixirs...');
        try {
            this.elixirs = await this.api.getElixirs();

            this.elixirs.sort((a,b) => a.name.localeCompare(b.name));

            const difficulties = new Set(this.elixirs.map(elixir => elixir.difficulty));
            this.filter.setOptions(difficulties);

            this.showList();
        } catch (error) {
            this.list.showMessage('Could not load elixirs. Please try again later.');
        }
    }

    showList() {
        const filtered = this.elixirs.filter(elixir =>
            elixir.name.toLowerCase().includes(this.searchText) &&
            (this.difficulty === '' || elixir.difficulty === this.difficulty)
        );
        this.list.render(filtered);
    }

    async showDetails(id) {
        this.details.showMessage('Loading details...');
        try {
            const elixir = await this.api.getElixir(id);
            this.details.render(elixir);
        } catch (error) {
            this.details.showMessage('Could not load details. Please try again later.');
        }
    }
}

new App().loadElixirs();