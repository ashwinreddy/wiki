**Depth-first search (DFS)** is a [[graph traversal]] for a graph $G = (V, E)$ given a starting node $s \in V$. It identifies the vertices of a graph that can be reached from a starting point. It is related to [[breadth-first search]].

Tree edge
: An edge, actually part of the DFS forest, that leads to a vertex not previously visited

Back edge
: An edge that leads back to a vertex previously visited / an ancestor in the DFS tree

Cross edge
: Leads to neither descendant nor ancestor; they therefore lead to a node that has already been completely explored (that is, already postvisited).

# Pseudocode

```python
def dfs(G):
    for v in V:
        visited[v] = False
    for v in V:
        if not visited[v]:
            explore(v)

def explore(G, v):
    visited[v] = True
    previsit(v)
    for edge in v.edges:
        if not visited[u]:
            explore(u)
    postvisit(v)
```

# Runtime

The runtime is $\order{|V| + |E|}$, linear in the size of the input.