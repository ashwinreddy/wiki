A **directed acyclic graph (DAG/dag)** is a kind of [[graph]] with no [[cycle]] in which the edges have directions and there are no cycles. They have at least one source and one sink. 

# [[Topological Sort]]


# Shortest Path

Since we can do a topological sort, we can find the shortest path from $s$ to any other node.

```python
for node in nodes:
    dist[node] = float('inf')

dist[source] = 0

for node in nodes.difference({ source }):
    dist[node] = min([ dist[u] + l(u, v) for (u, v) in edges])
```
