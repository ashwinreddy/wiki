A **least-squares problem** is an [[optimization problem]] of the form

$$
\min \lVert Ax - b \rVert_2^2 = \sum_{i=1}^k \left(a_i^\mathsf{T} x - b_i \right)^2
$$

where $A \in \RR^{k \times n}$ a tall matrix (i.e. $k \geqslant n$). The solution is given by

$$
\left(A^\mathsf{T}A\right)x = A^\mathsf{T}b
$$

Therefore we have

$$
x = (A^\mathsf{T}A)^{-1}A^\mathsf{T}b
$$

This can be solved in $\order{n^2 k}$ time. If $A$ is a [[sparse matrix]]