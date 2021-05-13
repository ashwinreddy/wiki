A **congestion game** is a [[potential game]] where players are trying to get from a start point to an end point while minimizing their time.



[[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Congestion-diagram.svg/640px-Congestion-diagram.svg.png|align=center]]

is a game where the $j$th player aims to drive from city $s_j$ to $t_j$. Each road has a cost function, so there is a total cost. Let the paths selected by the drivers be $\mathbf{P} = (P_1, \dots, P_k)$ and $n_r(\mathbf{P})$ is the number of drivers that use road $r$. Then the cost is given by totalling the cost on road $r$, which we'll call $c_r(n)$, when $n$ people drive on that road:

$$
\mathsf{cost}\_i(\mathbf{P}) = \sum_{r \in P_i} c_r(n_r(\mathbf{P}))
$$
