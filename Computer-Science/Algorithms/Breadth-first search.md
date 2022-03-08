**Breadth-first search (BFS)** is an [[algorithm]] to traverse a [[graph]] $G$ using a [[queue]]. It searches layer by layer. It is similar to [[depth-first search]].

If $G$ is unweighted or all the edges have equal weight, then BFS will find the shortest path to a given node.

# Pseudocode

```python
def bfs(G, root):
    q = queue()
    visited[root] = True
    q.queue(root)
    
    while q:
        v = q.dequeue()
        if v is leaf:
            return v
        for edges from v:
            if w is not explored:
                visited[w] = True
                q.queue(w)
```

# Runtime

The overall runtime is $\order{|V| + |E|}$