The **knapsack problem** is an [[optimization problemm]]. A robber's bag can only hold weight $W$. He can pick from $n$ items which have weight $w_1, \dots, w_n$ and dollar value $v_1, \dots, v_n$. What should he do?

# With Repetition

We can solve with [[dynamic programming]]. Let $K(w)$ be the maximum value achievable with a knapsack of capacity $w$. The insight is that $K(w)$ must be $K(w - w_i) + v_i$ for the right choice of $w_i$, so

$$
K(w) = \max_{i : w_i \leq w}\\{ K(w-w_i) + v_i \\}
$$

1. $K(0) = 0$
2. For $w = 1$ to $W$
    * $K(w) = \max\\{ K(w - w_i) + v_i: w_i \leqslant w \\}$
3. Return $K(W)$

This runtime is $\order{nW}$