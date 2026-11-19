const BASE_URL = 'https://wizard-world-api.herokuapp.com';

export class ElixirApi {
    async getElixirs() {
        const response = await fetch(`${BASE_URL}/Elixirs`);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    }

    async getElixir(id) {
        const response = await fetch(`${BASE_URL}/Elixirs/${id}`);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    }
}