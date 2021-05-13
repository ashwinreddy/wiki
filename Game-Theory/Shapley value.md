**Shapley value** is an allocation $\psi(v)$ in a [[cooperative game]]. 


# Shapley's Axioms

1. **Symmetry**: If $v\left(S \cup \\{ i\\}\right)=v(S \cup \\{ j \\})$ for all $S$ with $i, j \not\in S$, then $\psi_i(v)=\psi_j(v)$.
2. **Dummy**: A player that doesn't add value gets nothing, i.e. if $v(S \cap \\{ i\\}) = v(S)$ for all $S$, then $\psi_i(v)=0$.
3. **Efficiency**: $$\sum_{i=1}^n \psi_i(v) = v(\\{1, \dots, n\\}).$$
4. **Additivity**: $\psi_i(v+u) = \psi_i(v) + \psi_i(u).$

# Shapley's Theorem

Let $\pi$ be some ordering of the player's arrivals. Let $\psi_i(v, \pi)$ be the marginal contribution of player $i$ when he enters in the ordering $\pi$.

$$
\psi_i(v) = \frac{1}{n!} \sum_{\pi \in S_n} \psi_i(v, \pi).
$$

# Properties

* If $v(\cdot)$ is $\\{0, 1\\}$-valued, then $\psi_i(v)$ is the probability that player $i$'s arrival converts a losing coalition into a winning one.

It turns out we can write

$$
v = \sum_{S \subset N} c_S w_S
$$