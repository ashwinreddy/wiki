**Hitting time** for some subset $A \subset S$ is [[random variable]]

$$
T_A = \min \\{ n \geqslant 0 : X_n \in A\\}.
$$

# First Step Equations

This distribution is hard to compute. We can try to find

$$
t_i = \mathbb{E}(T_A \mid X_0 = i) = \begin{cases} 1 + \sum_{j \in S} p_{ij}\mathbb{E}(T_A \mid X_0 = j) & i \not\in A \\\\   0 & i \in A\end{cases}
$$

For $i \not\in A$,

$$

$$

For $i \in A$,

$$
.
$$

So

$$
t_i = \begin{cases} 1 + \sum_{j \in S} p_{ij}t_j & i \not\in A \\\\ 0 & i \in A\end{cases}
$$