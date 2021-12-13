**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]] that puts an L2 norm penalty on the weights as regularization. 

# Derivation

If the [[design matrix]] is $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^{n}$,

\begin{equation}
\boxed{\mathbf{w}\_{\mathrm{ridge}} = \arg\min_{\mathbf{w} \in \RR^d} \lVert \mathbf{X}\mathbf{w} - \mathbf{y} \rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2}
\tag{Ridge Regression}
\end{equation}

\begin{align\*}
\mathbf{0} &= \nabla_{\mathbf{w}}\left[\lVert \mathbf{X}\mathbf{w} - \mathbf{y} \rVert_2^2 + \lambda \lVert \mathbf{w} \rVert_2^2\right] \\\\
&=  -2\mathbf{X}^\mathsf{T}\mathbf{y} + 2\mathbf{X}^\mathsf{T}\mathbf{X}\mathbf{w} + 2\lambda \mathbf{w} \\\\
&=  -\mathbf{X}^\mathsf{T}\mathbf{y} + (\mathbf{X}^\mathsf{T}\mathbf{X} + \lambda I)\mathbf{w}
\end{align\*}

\begin{equation}
\mathbf{w}\_{\mathrm{ridge}} = (\mathbf{X}\^\mathsf{T}\mathbf{X} + \lambda I)\^{-1}\mathbf{X}^\mathsf{T}\mathbf{y}
\end{equation}

As $\lambda \to \infty$, $\mathbf{w}\_{\mathrm{ridge}} \to 0$.

# Kernel Ridge Regression

[[Kernel method]]

$$
\arg\min_{\alpha \in \RR^n} \frac{1}{N}\lVert Y - K\alpha \rVert_2^2 + \lambda \alpha^\mathsf{T} K \alpha = (K + \lambda NI_N)^{-1}Y
$$

## Dual

In dual ridge regression, we consider $\mathbf{w} = \mathbf{X}^\mathsf{T}\alpha$ where $\alpha$ is a vector of dual weights. The optimal solution is then

$$
\mathbf{\alpha}^\star = (K + \lambda I)^{-1}\mathbf{y}
$$

From which we see that

$$
\mathbf{w}^\star = \mathbf{X}^\mathsf{T} (K + \lambda I)^{-1}\mathbf{y}
$$