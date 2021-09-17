**Depth-first search (DFS)** is a [[graph]] exploration algorithm.

```python
def dfs(G):
    for all v in V:
        visited[v] = False
    for all v in V:
        if not visited[v]:
            explore(v)
```

# Runtime

