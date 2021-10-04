**Dijkstra's algorithm** is an [[algorithm]] for finding shortest paths between nodes in a graph. In particular, it takes a start vertex $s \in V$ for a [[graph]] $G = (V, E)$ with positive edge lengths $\\{\ell_e: e \in E\\}$ and tells you all the distances from $s$ to reachable vertices you can get to from it. 

It builds off of [[breadth-first search]] using a [[priority queue]].

# Description

Keep an array of distances where `dist[s] = 0` and all others are sent to infinity at first. Then, keep a queue to decide where to go next and keep a set to track where we've been. Queue all the nodes initially.

# Pseudocode

```python
def dijkstra(G, source):
    q = queue()
    
    for v in G.V:
        dist[v] = float('inf')
```

# Caveat

We need positive edge lengths. Suppose $G$ has negative edges and we make $G'$ by adding a large positive constant. If we run Dijkstra's on $G'$, we won't get the same answer for $G$. This result is because the algorithm marks a shortest path once a vertex is marked as closed, and so it won't develop that node any further -- even if there are negative edges that could shorten the path further.
