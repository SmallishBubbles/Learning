// pathfinding
// if there are no barriers, something simple like 'go towards ntil you hit'would work
// however, if you add obsticles, this breaks down very fast.

// Simplified version of Dijkstra's algorithm (breadth first search) solves this
// go one step around the start point, one step around the end point
// one step further (around the points you just created)... etc
// when the points intersect, you have found the shortest possible path