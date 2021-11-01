The **knapsack problem**. A robber's bag can only hold weight $W$. He can pick from $n$ items which have weight $w_1, \dots, w_n$ and dollar value $v_1, \dots, v_n$. What should he do?

# With Repetition

Let $K(w)$ be the maximum value achievable with a knapsack of capacity $w$. Then,

$$
K(w) = \max_{i : w_i \leq w}\\{ K(w-w_i) + v_i \\}
$$