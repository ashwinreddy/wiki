A **congestion game** is one where players are trying to get from a start point to an end point while minimizing their time.



[[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Congestion-diagram.svg/640px-Congestion-diagram.svg.png]]










is a game where the $j$th player aims to drive from city $s_j$ to $t_j$. Each road has a cost function, so there is a total cost. Let the paths selected by the drivers be $\mathbf{P} = (P_1, \dots, P_k)$ and $n_r(\mathbf{P})$ is the number of drivers that use road $r$. Then the cost is given by totalling the cost on road $r$, which we'll call $c_r(n)$, when $n$ people drive on that road:

$$
\mathsf{cost}\_i(\mathbf{P}) = \sum_{r \in P_i} c_r(n_r(\mathbf{P}))
$$

# Potential function

We have a potential function

$$
\psi: S\_1 \times \dots \times S_k \to \RR
$$

Let $u_i$ be the utility function for the $i$th player.

$$
\psi(s_1, \dots, s_i, \dots, s_k) - \psi(s_1, \dots, s_i', \dots, s_k) = u_i(s_1, \dots, s_i, \dots, s_k) - u_i(s_1, \dots, s_i', \dots, s_k)
$$

If $(s_1, \dots, s_k)$ is a [[Nash equilibrium]] if for all $i$,

$$
u_i(s_1, \dots, s_i, \dots, s_k) \geqslant u_i(s_1, \dots, s_i', \dots, s_k).
$$

This condition is equivalent to saying that 

$$
\psi(s_1, \dots, s_i, \dots, s_k) \geqslant \psi(s_1, \dots, s_i', \dots, s_k)
$$

$$
\psi(S) = \sum_{i=1}^m \sum_{j=1}^{n_i} c_i(j).
$$