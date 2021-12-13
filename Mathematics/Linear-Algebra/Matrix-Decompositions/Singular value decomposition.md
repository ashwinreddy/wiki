The **singular value decomposition (SVD)** is a (non-unique) [[matrix decomposition]] for any $m \times n$ [[matrix]] $\mathbf{A}$ into

\begin{align\*}
\mathbf{A} &= \mathbf{U}\mathbf{\Sigma} \mathbf{V}^{\mathsf{T}} \\\\
&= \begin{bmatrix}u_1 & u_2 & \cdots & u_m \end{bmatrix} \begin{bmatrix}\sigma_1 & 0 & 0 & \dots \\\\ 0 & \sigma_2 & 0 & \dots \\\\ \vdots & 0 & \ddots & 0 \\\\  \end{bmatrix} \begin{bmatrix}v_1 & v_2 & \cdots & v_n \end{bmatrix}^\mathsf{T}
\end{align\*}

with rectangular diagonal matrix $\mathbf{\Sigma}$ containing the [[singular values|singular value]] and [[orthogonal matrices|orthogonal matrix]] $U$ and $V$. Notice that we have

$$
AV = U\Sigma.
$$

\begin{equation}
A = \underbrace{U}\_{m \times m}\cdot\underbrace{\Sigma}\_{m \times n}\cdot \underbrace{V^\mathsf{T}}_{n \times n}
\end{equation}

The [[column space|range]] come from the **left singular vectors** $\\{ u_i \\}$, the eigenvectors of $XX^\mathsf{T}$. The row space comes from **right singular vectors** $\\{ v_i \\}$, the eigenvectors of $X^\mathsf{T}X$.

$$
X^\mathsf{T}X = V\Sigma \cancel{U^\mathsf{T}U}\Sigma V^\mathsf{T} = V \Sigma^2 V^\mathsf{T}
$$


# Spaces

The first $\operatorname{rank}(A)$ left singular vectors are an orthonormal basis for the column space of $A$.

The last right singular vectors are an orthonormal basis for the [[null space]] of $A$.

# Computation

* Choose to compute $A^\mathsf{T}A$ or of $AA^\mathsf{T}$.
* If you computed $A^\mathsf{T}A$, find its eigenvectors. That's $V$. Else, do $U$

# Properties

$$
\operatorname{rank}(A) = \operatorname{rank}(\Sigma)
$$