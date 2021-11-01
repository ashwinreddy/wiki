The **knapsack problem**. A robber's bag can only hold weight $W$. He can pick from $n$ items which have weight $w_1, \dots, w_n$ and dollar value $v_1, \dots, v_n$. What should he do?

# With Repetition

Let $K(w)$ be the maximum value achievable with a knapsack of capacity $w$. The insight is that $K(w)$ must be $K(w - w_i) + v_i$ for the right choice of $w_i$, so

$$
K(w) = \max_{i : w_i \leq w}\\{ K(w-w_i) + v_i \\}
$$