export class DifficultyFilter {
    constructor(select, onChange) {
        this.select = select;
        select.addEventListener('change', () => {
            onChange(select.value);
        });
    }

    setOptions(difficulties) {
        for (const difficulty of difficulties) {
            const option = document.createElement('option');
            option.value = difficulty;
            option.textContent = difficulty;
            this.select.append(option);
        }
    }
}