The **change-making problem** asks us to make change using a set of coins. Given an amount $W>0$ and $\\{w_i\\}_{i=1}^n$ with $w_i < w_j$ if $i < j$. Find how much of each currency to use so that

$$
\begin{aligned}
\min \quad & \sum_{j=1}^n x_j \\\\
\text{s.t.} \quad  & \sum_{j=1}^n w_j x_j = W.
\end{aligned}
$$

We can use a [[dynamic programming]] approach. Let $N(W)$ be the number of coins to make change for $W$. For some $C$,

$$
N(W) = N(W - C) + 1
$$

The [[recurrence relation]] is actually

$$
N(W) = \min_{i \in [n]}  F(S - c_i) + 1
$$
