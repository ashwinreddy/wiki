**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]]. If the [[design matrix]] is $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^{n}$,

$$
\mathbf{w}\_{\mathrm{ridge}} = \arg\min_{\mathbf{w} \in \RR^d} \lVert \mathbf{X}\mathbf{w} - \mathbf{y} \rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2
$$

\begin{equation}
\mathbf{w}\_{\mathrm{ridge}} = (X\^\mathsf{T}X + \lambda I)\^{-1}X^\mathsf{T}y
\end{equation}

As $\lambda \to \infty$, $\mathbf{w}\_{\mathrm{ridge}} \to 0$.

# Kernel Ridge Regression

[[Kernel method]]