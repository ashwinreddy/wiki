**Matrix chain multiplication** is an [[optimization problem]] where we want to use the [[associative property]] of [[matrix multiplication]] to minimize the number of multiplications we have to do.

Suppose we want to compute $A_1 A_2 \dots A_n$ with dimensions $m_0 \times m_1, m_1 \times m_2, \dots, m_{n-1} \times m_n$. This problem can be represented with a [[binary tree]].

[[/uploads/chain_multiply.png]]

How many binary trees are there with $n$ leaves? That is exponential in $n$, so it is no-go. We can use [[dynamic programming]].

$$
C(i, j) \triangleq \text{minimum cost of multiplying } A_i A_{i+1}\cdots A_j.
$$

Note the size of the subproblem is $|j-i|$. Anyway, the goal is to compute $C(1, n)$. What is the recurrence relation?

$$
C(i, j) = \min_{i \leqslant k < j}\\{C(i, k) + C(k+1, j) + m_{i-1} m_k m_j \\}.
$$

The idea here is that $k$ is the point which will split the product into two pieces: $A_i \dots A_k$ and $A_{k+1} \dots A_j$. Therefore, we will have to add the cost of doing the products before and after $k$ and then adding in the cost of the product at $k$ itself.

The table is 2D with entries taking $\order{n}$ time, so the total time is $\order{n^3}$.