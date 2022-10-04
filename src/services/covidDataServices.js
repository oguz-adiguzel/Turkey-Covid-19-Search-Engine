import axios from "axios";

export class CovidServices {
    baseUrl = "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";

    async getData() {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }
}