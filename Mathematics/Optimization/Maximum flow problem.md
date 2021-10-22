The **maximum flow problem** gives us a [[directed graph]] $G$ and asks us to find the route that maximizes flow from $s$ to $t$ when every edge has a **capacity** $c_e > 0$ which cannot be exceeded.

[[/uploads/flow.png]]

Constraints are as follows:

1. Edge capacities are obeyed: $0 \leq f_e \leq c_e$
2. Flow is conserved: $$\sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}$$

# Residual 

Given a flow $f$, the **residual capacity** is how much capacity is left-over on each edge: $c_f(u, v) = c_{uv} - f_{uv}$. The **residual network** $G_f = (V, E_f)$ keeps the same nodes but with this residual capacity.