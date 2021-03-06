const defaultConn = Deno.env.get("REPLIT_DB_URL");
const connect = async (uri = defaultConn) => {
    if (!uri) {
        throw new Error("please provide a replit db connection string");
    }
    const keys = fetch(uri);
    console.log(keys);
    const store = {};
    const handle = {};
    return new Proxy(store, handle);
};
export default connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9ob21lL3J1bm5lci9yZXBsLWRiLWRlbm8vY29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUVqRCxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsR0FBRyxHQUFHLFdBQVcsRUFBRSxFQUFFO0lBQzFDLElBQUcsQ0FBQyxHQUFHLEVBQUU7UUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7S0FDaEU7SUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUVqQixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUE7SUFFaEIsTUFBTSxNQUFNLEdBQUcsRUFFZCxDQUFBO0lBRUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFBO0FBRUQsZUFBZSxPQUFPLENBQUEifQ==