**Breadth-first search (BFS)** is an [[algorithm]] to traverse a [[graph]]. It will give it to you in order of distance from the starting vertex. It is similar to [[depth-first search]].

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