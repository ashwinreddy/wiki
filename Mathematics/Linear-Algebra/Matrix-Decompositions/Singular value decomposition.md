The **singular value decomposition (SVD)** is a (non-unique) [[matrix decomposition]] for any $m \times n$ [[matrix]] $\mathbf{A}$ of rank $r$ into

\begin{align\*}
\mathbf{A} &= \overbrace{\mathbf{U}}^{\textbf{left singular vectors}} \underbrace{\mathbf{\Sigma}}\_{\textbf{singular values}} &\mathbf{\underbrace{V}_{\text{right singular vectors}}}^{\mathsf{T}} \\\\
&= \begin{bmatrix}u_1 & u_2 & \cdots & u_m \end{bmatrix} \begin{bmatrix}\sigma_1  \\\\ &  \ddots \\\\ & & \sigma_m \end{bmatrix} & \begin{bmatrix}v_1 & v_2 & \cdots & v_n \end{bmatrix}^\mathsf{T} \tag{Full SVD} \\\\
&= \begin{bmatrix}u_1 & u_2 & \cdots & u_r \end{bmatrix} \begin{bmatrix}\sigma_1  \\\\ &  \ddots \\\\ & & \sigma_r \end{bmatrix} & \begin{bmatrix}v_1 & v_2 & \cdots & v_r \end{bmatrix}^\mathsf{T} \tag{Compact/Thin SVD}
\end{align\*}

In the full SVD, rectangular diagonal matrix $\mathbf{\Sigma}$ containing the [[singular values|singular value]] and [[orthogonal matrices|orthogonal matrix]] $\mathbf{U}$ and $\mathbf{V}$. 


The [[column space|range]] come from the **left singular vectors** $\\{ u_i \\}$, the eigenvectors of $XX^\mathsf{T}$. The row space comes from **right singular vectors** $\\{ v_i \\}$, the eigenvectors of $X^\mathsf{T}X$.

$$
X^\mathsf{T}X = V\Sigma \cancel{U^\mathsf{T}U}\Sigma V^\mathsf{T} = V \Sigma^2 V^\mathsf{T}
$$


# Spaces

The first $\operatorname{rank}(A)$ left singular vectors are an orthonormal basis for the column space of $A$.

The last right singular vectors are an orthonormal basis for the [[null space]] of $A$.

\begin{gather\*}
\operatorname{Col}(\mathbf{A}) = \operatorname{span} \\{ u_i \\}\_{i=1}^{r}  \\\\
\operatorname{Row}(\mathbf{A}) = \operatorname{span} \\{ v_i \\}\_{i=r+1}^{\min{n, m}}
\end{gather\*}

# Computation

* Choose to compute $A^\mathsf{T}A$ or of $AA^\mathsf{T}$.
* If you computed $A^\mathsf{T}A$, find its eigenvectors. That's $V$. Else, do $U$

# Properties

$$
\operatorname{rank}(A) = \operatorname{rank}(\Sigma)
$$