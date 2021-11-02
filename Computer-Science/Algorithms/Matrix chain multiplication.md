**Matrix chain multiplication** is an [[optimization problem]] where we want to use the [[associative property]] of [[matrix multiplication]] to minimize the number of multiplications we have to do.

Suppose we want to compute $A_1 A_2 \dots A_n$ with dimensions $m_0 \times m_1, m_1 \times m_2, \dots, m_{n-1} \times m_n$. This problem can be represented with a [[binary tree]].

[[/uploads/chain_multiply.png]]

How many binary trees are there with $n$ leaves? That is exponential in $n$, so it is no-go. We can use [[dynamic programming]].

$$
C(i, j) = \text{minimum cost of multiplying } A_i A_{i+1}\cdots A_j
$$