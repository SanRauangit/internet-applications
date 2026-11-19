export class SearchBar {
    constructor(input, onSearch) {
        input.addEventListener('input', () => {
            onSearch(input.value);
        });
    }
}