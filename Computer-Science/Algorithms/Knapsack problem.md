The **knapsack problem** is an [[optimization problem]]. A robber's bag can only hold weight $W$. He can pick from $n$ items which have weight $w_1, \dots, w_n$ and dollar value $v_1, \dots, v_n$. What should he do?

# With Repetition

We can solve with [[dynamic programming]]. Let $K(w)$ be the maximum value achievable with a knapsack of capacity $w$. Clearly, our goal is to compute $K(W)$. The insight is that $K(w)$ must be $K(w - w_i) + v_i$ for the right choice of $w_i$, so

$$
K(w) = \max_{i : w_i \leq w}\\{ K(w-w_i) + v_i \\}
$$

1. $K(0) = 0$
2. For $w = 1$ to $W$
    * $K(w) = \max\\{ K(w - w_i) + v_i: w_i \leqslant w \\}$
3. Return $K(W)$

We have $W+1$ problems of work $\order{n}$, so the runtime is $\order{nW}$.

# Without repetition

We'll have to change up the approach. Let $K(w,j)$ be the maximum value achievable with capacity $w$ and items $1, \dots, j$. We're trying to find $K(W, n)$.

$$
K(w, j) = \max \\{ \overbrace{ K(w - w_j, j-1) + v_j }^{\text{use item } j}, K(w, j-1) \\}
$$