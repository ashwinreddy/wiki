**Kruskal's [[minimum spanning tree]] algorithm** starts with a graph $G$ and builds the MST by selecting an edge according to the following rule:

_Repeatedly add the next lightest edge that doesn't produce a cycle._

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