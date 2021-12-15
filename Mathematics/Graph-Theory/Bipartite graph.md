A **bipartite graph** is a [[graph]] $G = (L \cup R, E)$ that is two-colorable.

[[https://mathworld.wolfram.com/images/eps-gif/BipartiteGraph_1000.gif|align=center]]

# Maximum Bipartite Matching

Given a bipartite graph, find the size of the largest [[matching]] possible. This can be turned into [[linear programming]].

$$
\begin{aligned}
\max & \quad \sum_{e \in E} x_e \\\\
\text{s.t.} & \sum_{e \in E: v \sim e} x_e \leqslant 1
\end{aligned}
$$