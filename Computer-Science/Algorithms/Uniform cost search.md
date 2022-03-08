**Uniform cost search** is an unininformed search algorithm as [[Dijkstra's algorithm]]. The frontier representation is a [[priority queue]]. The priority for $v$ is the backward cost of $v$.

Backward cost
: Path cost from start node to a given node $v$.

Optimal if edge costs are non-negative.

Suppose the optimal path cost is $C^*$ and the minimal cost between two nodes is $\epsilon$. Then the runtime is $\order{b^{C\^* / \epsilon }}$