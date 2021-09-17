**Depth-first search (DFS)** is a [[graph]] exploration algorithm. It identifies the vertices of a graph that can be reached from a starting point.

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