**Kruskal's algorithm** is a [[greedy algorithm]] that finds a [[minimum spanning tree]] $T$ for a graph $G$.

_Repeatedly add the next lightest edge that doesn't produce a cycle._

We will need a [[union-find data structure]].

# Pseudocode

```python
def kruskal(G, w):
    # Input: connected undirected graph G with edge weights w
    # Output: A minimum spanning tree defined by edges X
    
    for u in G.vertices:
        makeset(u)
    
    X = set()
    G.edges.sort()
    for edge in G.edges:
        if find(edge.u) != find(edge.v):
            X.add(edge)
            union(edge.u, edge.v)
```

# Runtime analysis

This algorithm takes $\order{|E| \log |V|}$ time.
