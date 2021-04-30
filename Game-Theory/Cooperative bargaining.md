**Cooperative bargaining** is a [[cooperative game]]. Let's consider two people who are looking to agree on a point in some set $S$ and if they can't come to an agreement, they default to a point $\mathbf{d}$.

# Formalization

Let $S$ be a bounded convex set in $\RR^2$ and $\mathbf{d}=(d_1, d_2)$. A solution is a

$$
F(S, \mathbf{d}) = \mathbf{a} \in S.
$$

Where $\mathbf{a}=(a_1, a_2)$, payoffs for both players. The **Nash bargaining solution is**


\begin{aligned}
\max \quad & (x_1 - d_1)(x_2 - d_2) \\\\
\textrm{s.t.} \quad & x_1 \geqslant d_1, \quad x_2 \geqslant d_2, \\\\
  &(x_1, x_2) \in S    \\
\end{aligned}
