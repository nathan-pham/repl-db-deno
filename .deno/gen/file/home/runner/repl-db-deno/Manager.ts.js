class Manager {
    constructor(uri) {
        this.#uri = uri;
    }
    #uri;
    setKey(key, value) {
        return fetch(`${this.#uri}?${key}=${value}`, {
            method: "POST"
        });
    }
    getKey(key) {
        return fetch(`${this.#uri}/${key}`, {
            method: "GET"
        });
    }
    deleteKey(key) {
        return fetch(`${this.#uri}/${key}`, {
            method: "DELETE"
        });
    }
    listAll(prefix) {
        return fetch(`${this.#uri}?prefix=${prefix}`, {
            method: "POST"
        });
    }
}
export default Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9ob21lL3J1bm5lci9yZXBsLWRiLWRlbm8vTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU87SUFHWCxZQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUpELElBQUksQ0FBUTtJQU1aLE1BQU0sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUMvQixPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNsQyxNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksV0FBVyxNQUFNLEVBQUUsRUFBRTtZQUM1QyxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQUVELGVBQWUsT0FBTyxDQUFBIn0=