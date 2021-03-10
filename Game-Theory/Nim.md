**Nim** is an impartial [[combinatorial game]] where players alternate removing an arbitrary number of positive chips from a tuple $(n_1, \dots, n_k)$. The terminal state is that no chips are left.

# Classification

Since it's progressively bounded in normal play, every state is N or P. To find out, take the [[nim-sum]]. If it is 0, the state is P.

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

If this nim sum is 0, then the configuration is P.