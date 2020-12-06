**Matrix multiplication** is an operation between an $\ell \times m$ [[matrix]] and $m \times n$ matrix. Formally, the operation is defined by the equation below, but it tends not to be helpful for intuition.

$$
\left(AB\right)\_{ij} = \sum\_{k=1}^n A_{ik}B_{kj} 
$$

$$
\begin{bmatrix}
\vec{a}_1^\mathsf{T} \\\\
\vdots \\\\
\vec{a}_n^\mathsf{T}
\end{bmatrix}\cdot\begin{bmatrix}
\vec{b}_1
\end{bmatrix}
$$

# Properties

* It is not a commutative operator.

# Computation

If both matrices are $n \times n$ then this naive [[algorithm]] computation has [[time complexity]] $\order{n^3}$.