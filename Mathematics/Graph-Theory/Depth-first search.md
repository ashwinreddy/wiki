**Depth-first search (DFS)** is a [[graph traversal]] algorithm that selects the deepest frontier node for expansion. The frontier representation is a [[stack]].  It is related to [[breadth-first search]].


[[_TOC_]]

# Formalism

Let $G = (V, E)$ be a [[graph]] with starting node $s \in V$. It identifies the vertices of a graph that can be reached from a starting point.

Tree edge
: An edge, actually part of the DFS forest, that leads to a vertex not previously visited

Back edge
: An edge that leads back to a vertex previously visited / an ancestor in the DFS tree

Cross edge
: Leads to neither descendant nor ancestor; they therefore lead to a node that has already been completely explored (that is, already postvisited).

# Properties

_Completeness_. If there are cycles, naive search will get stuck.

_Optimality_. Doesn't consider costs.

_Complexity_. If the branching factor is $b$ and the maximum depth is $m$, the runtime is $\order{b^m}$. The space complexity is $\order{bm}$ because only one subtree is explored at any time.

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

```python
from collections import defaultdict

sort = []

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
        self.nodes = set()
    
    def addEdge(self, u, v):
        self.nodes.add(u)
        self.nodes.add(v)
        self.graph[u].append(v)

    def depthFirstSearch(self, node):
        visited = {node: False for node in self.nodes}
        self.dfsUtil(node, visited)
    
    def dfsUtil(self, node, visited):
        visited[node] = True
        print(node)
        for neighbor in self.graph[node]:
            if not visited[neighbor]:
                self.dfsUtil(neighbor, visited)


g = Graph()
g.addEdge("Intro to CS", "Data Structures")
g.addEdge("Data Structures", "Machine Structures")
g.addEdge("Discrete Math", "Data Structures")

g.depthFirstSearch("Intro to CS")
```

# Runtime

The runtime is $\order{|V| + |E|}$, linear in the size of the input.