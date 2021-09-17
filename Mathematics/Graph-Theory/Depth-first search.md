**Depth-first search (DFS)** is a [[graph]] exploration algorithm.

```python
def dfs(G):
    for v in V:
        visited[v] = False
    for v in V:
        if not visited[v]:
            explore(v)
```

# Runtime

The runtime is $\order{|V| + |E|}$, linear in the size of the input.