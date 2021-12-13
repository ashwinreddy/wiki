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

The [[kernel method]] here comes by considering a [[dual problem|duality]]. In dual ridge regression, we consider $\mathbf{w} = \mathbf{X}^\mathsf{T}\pmb{\alpha}$ where $\pmb{\alpha}$ is a vector of dual weights. The optimal solution is then

$$
\pmb{\alpha}^\star = (\pmb{K} + \lambda \pmb{I})^{-1}\mathbf{y}
$$

From which we see that

$$
\mathbf{w}^\star = \pmb{X}^\mathsf{T} (\pmb{K} + \lambda \pmb{I})^{-1}\mathbf{y}
$$

This problem is in $n \times n$.