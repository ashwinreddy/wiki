**Dijkstra's algorithm** is an [[algorithm]] that takes a start vertex $s \in V$ for a [[graph]] $G = (V, E)$ with positive edge lengths $\\{\ell_e: e \in E\\}$ and tells you all the distances from $s$ to reachable vertices you can get to from it. 

It builds off of [[breadth-first search]] using a [[priority queue]].

# Idea

Keep an array of distances where `dist[s] = 0` and all others are sent to infinity at first. Then, keep a queue to decide where to go next and keep a set to track where we've been.

# Pseudocode



# Runtime Analysis

A binary heap for priority queue would give $\order{(|V| + |E|) \log |V|}$