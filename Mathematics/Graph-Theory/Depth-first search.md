**Depth-first search (DFS)** is a [[graph traversal]] for a graph $G = (V, E)$ given a starting node $s \in V$. It identifies the vertices of a graph that can be reached from a starting point. It is related to [[breadth-first search]].

# DFS Forest

$s$ is the root of the search tree. Everything else is its descendant.

Tree edge
: An edge that leads to a vertex not previously visited

Back edge
: An edge that leads back to a vertex previously visited

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