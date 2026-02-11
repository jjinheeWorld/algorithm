/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const bfs = (rooms, visited, startRoom) => {
    const queue = [];
    queue.push(startRoom);
    visited[startRoom] = true;

    while (queue.length > 0) {
        const currentRoom = queue.shift();
        
        for (const key of rooms[currentRoom]) {
            if (!visited[key]) {
                queue.push(key);
                visited[key] = true;
            }
        }
    }
}

const canVisitAllRooms = function(rooms) {
    const visited = Array(rooms.length).fill(false);
    bfs(rooms, visited, 0);

    return visited.every(Boolean);
};