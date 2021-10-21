The **maximum flow problem** asks us to find a flow from node $s$ to $t$ in a graph $G=(V,E)$ with capacities $c_e > 0$. A flow specifies an $f_e$ for each edge.

1. Edge capacities are obeyed: $0 \leq f_e \leq c_e$
2. Flow is conserved: $$\sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}$$

[[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pets_flow.svg/640px-Pets_flow.svg.png|width=300px]]

