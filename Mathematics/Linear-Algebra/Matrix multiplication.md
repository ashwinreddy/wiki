**Matrix multiplication** is an operation between an $\ell \times m$ [[matrix]] and $m \times n$ matrix. Formally, the operation is defined by the equation below, but it tends not to be helpful for intuition.

$$
\left(AB\right)\_{ij} = \sum\_{k=1}^n A_{ik}B_{kj} 
$$

In this way, we're basically finding all the dot products at once:

$$
\begin{bmatrix}
--- & \vec{a}_1^\mathsf{T} & --- \\\\
& \vdots & \\\\
--- & \vec{a}_m^\mathsf{T} & ---
\end{bmatrix}\cdot \begin{bmatrix}
| & & | \\\\
\vec{b}_1 & \dots & \vec{b}_n \\\\
| & & |
\end{bmatrix} =  \begin{bmatrix}
\langle \vec{a}_1, \vec{b}_1 \rangle & \dots & \langle \vec{a}_1, \vec{b}_n \rangle \\\\
\vdots & \ddots & \vdots \\\\
\langle \vec{a}_m, \vec{b}_1 \rangle & \dots & \langle \vec{a}_m, \vec{b}_n \rangle
\end{bmatrix}
$$

# Properties

* It is not a commutative operator.

# Computation

If both matrices are $n \times n$ then this naive [[algorithm]] computation has [[time complexity]] $\order{n^3}$.

```py
def matmul(a, b, c):
    for i in range(a.shape[0]):
        for j in range(b.shape[1]):
            for k in range(a.shape[1]):
                c[i][k] += a[i][k] * b[k][j]
    return c
```