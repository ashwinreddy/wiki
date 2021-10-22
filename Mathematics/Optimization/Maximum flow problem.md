The **maximum flow problem** gives us a [[directed graph]] asks us to find the maximum flow $f: E \to \RR^+$ in a [[flow network]]. 

1. Edge capacities are obeyed: $0 \leq f_e \leq c_e$
2. Flow is conserved: $$\sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}$$

[[https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pets_flow.svg/640px-Pets_flow.svg.png|width=300px]]

