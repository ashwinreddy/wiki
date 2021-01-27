**Nim** is an impartial [[combinatorial game]] where player can remove arbitrary number of positive chips from any pile of many piles. The terminal state is that no chips are left.

# P/N Classification

For any $n$, $(n, n)$ is a P state, while $(n, l)$ is a N state for $n \neq l$. Clearly, $(0,0)$ and $(1, 1)$ are P states. We can proceed with strong induction. So we have $(k, k)$ a P state for all $k$ up to some point. Now consider $(k+1, k+1)$. W.l.o.g. the player at this state will have to take it to $(k+1, l)$ for some $l < k+1$. But then the player at this state could take it down to $(l, l)$ which is a P state. So the 2nd player can always force a win, Q.E.D.

If $x$ and $y$ are configurations, then $(x \in P, y \in P) \in P$ and $(x \in N, y \in P) \in N$.

* In the first case, the move ends us in a $(N, P)$ and $(P, N)$.

## Bouton's solution

Say the chips configuration is given by $x_1, \dots, x_k$

1. Expand each $x_i$ in binary

$$
x_i = \sum_{j=0}^{\ell} a_{ij}2^j
$$

Define a new operation

$$
x_1 \oplus x_2 \oplus \dots \oplus x_k = \sum_{j=0} 2^j \left( a_{ij} \oplus a_{2j} \oplus a_{kj} \right)
$$
