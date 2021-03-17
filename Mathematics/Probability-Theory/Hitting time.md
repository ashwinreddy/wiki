**Hitting time** for some subset $A \subset S$ is [[random variable]]

$$
T_A = \min \\{ n \geqslant 0 : X_n \in A\\}.
$$

This distribution is hard to compute. We can try to find

$$
t_i = \mathbb{E}(T_A \mid X_0 = i).
$$

For $i \not\in A$,

$$
\mathbb{E}(T_A \mid X_0 = i) = 1 + \sum_{j \in S} p_{ij}\mathbb{E}(T_A \mid X_0 = j)
$$

For $i \in A$,

$$
\mathbb{E}(T_A \mid X_0 = i) = 0.
$$

So

$$
t_i = \begin{cases} 1 + \sum_{j \in S} p_{ij}t_j \end{cases}
$$