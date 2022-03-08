**Uniform cost search** is an unininformed search algorithm as [[Dijkstra's algorithm]]. The frontier representation is a [[priority queue]]. The priority for $v$ is the backward cost of $v$.

Backward cost
: Path cost from start node to a given node $v$.

Optimal if edge costs are non-negative.

Complexity is $\order{b^{C^* / \epsilon }}$