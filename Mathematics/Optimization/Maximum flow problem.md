The **maximum flow problem** gives us a [[directed graph]] and asks us to find the route that maximizes flow from $s$ to $t$.


Constraints are as follows:

1. Edge capacities are obeyed: $0 \leq f_e \leq c_e$
2. Flow is conserved: $$\sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}$$
