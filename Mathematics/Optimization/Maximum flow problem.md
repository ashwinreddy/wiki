The **maximum flow problem** gives us a [[directed graph]] $G$ and asks us to find the route that maximizes flow from $s$ to $t$ when every edge has a **capacity** $c_e > 0$ which cannot be exceeded.

[[/uploads/flow.png]]

This is [[linear programming]]

$$
\begin{aligned}
\max \quad & \sum_{(s,u) \in E} f_{su} \\\\
\textrm{s.t.} \quad & 0 \leq f_e \leq c_e \qquad \forall e \in E \\\\
& \sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}
\end{aligned}
$$

Constraints are as follows:

1. Edge capacities are obeyed: $0 \leq f_e \leq c_e$
2. Flow is conserved: $$\sum_{(w, u) \in E} f_{wu} = \sum_{(u, z) \in E} f_{uz}$$

# Residual 

Given a flow $f$, the **residual capacity** is how much capacity is left-over on each edge: 

$$c_f(u, v) = \begin{cases} c_{uv} - f_{uv} & c_{uv} - f_{uv} > 0 \\\\ f_{vu} & f_{vu} > 0 \end{cases}$$

The **residual network** $G_f = (V, E_f)$ keeps the same nodes but with this residual capacity. In addition, it puts in a reverse edge with the amount that went through so that we can backtrack if needed.