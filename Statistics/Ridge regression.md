**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]] that puts an L2 norm penalty on the weights as regularization. If the [[design matrix]] is $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^{n}$,

\begin{equation}
\boxed{\mathbf{w}\_{\mathrm{ridge}} = \arg\min_{\mathbf{w} \in \RR^d} \lVert \mathbf{X}\mathbf{w} - \mathbf{y} \rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2}
\tag{Ridge Regression}
\end{equation}

\begin{equation}
\mathbf{w}\_{\mathrm{ridge}} = (X\^\mathsf{T}X + \lambda I)\^{-1}X^\mathsf{T}y
\end{equation}

As $\lambda \to \infty$, $\mathbf{w}\_{\mathrm{ridge}} \to 0$.

# Kernel Ridge Regression

[[Kernel method]]

$$
\arg\min_{\alpha \in \RR^n} \frac{1}{N}\lVert Y - K\alpha \rVert_2^2 + \lambda \alpha^\mathsf{T} K \alpha = (K + \lambda NI_N)^{-1}Y
$$