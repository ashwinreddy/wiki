**Ridge regression** is an extension of [[ordinary least squares]] [[linear regression]] that puts an L2 norm penalty on the weights as regularization. 

# Derivation

If the [[design matrix]] is $X \in \mathbb{R}^{n \times d}$ and $y \in \mathbb{R}^{n}$,

\begin{equation}
\boxed{\pmb{w}\_{\mathrm{ridge}} = \arg\min_{\pmb{w} \in \RR^d} \frac{1}{2}\lVert \pmb{X}\pmb{w} - \pmb{y} \rVert_2^2 + \frac{1}{2}\lambda \lVert \pmb{w} \rVert_2^2}
\tag{Ridge Regression}
\end{equation}

\begin{align\*}
\pmb{0} &= \nabla_{\pmb{w}}\left[\lVert \pmb{X}\pmb{w} - \pmb{y} \rVert_2^2 + \lambda \lVert \pmb{w} \rVert_2^2\right] \\\\
&=  -\pmb{X}^\mathsf{T}\pmb{y} + \pmb{X}^\mathsf{T}\pmb{X}\pmb{w} + \lambda \pmb{w} \\\\
&=  -\pmb{X}^\mathsf{T}\pmb{y} + (\pmb{X}^\mathsf{T}\pmb{X} + \lambda I)\pmb{w}
\end{align\*}

\begin{equation}
\pmb{w}\_{\mathrm{ridge}} = (\pmb{X}\^\mathsf{T}\pmb{X} + \lambda \pmb{I}_d)\^{-1}\pmb{X}^\mathsf{T}\pmb{y}
\end{equation}

As $\lambda \to \infty$, $\pmb{w}\_{\mathrm{ridge}} \to 0$.

# Kernel Ridge Regression

The [[kernel method]] here comes by considering a [[dual problem|duality]]. This method is recommended when $d > n$. Here, we consider $\pmb{w} = \pmb{X}^\mathsf{T}\pmb{\alpha}$ where $\pmb{\alpha}$ is a vector of dual weights. The optimal solution is then

$$
\pmb{\alpha}^\star = (\pmb{K} + \lambda \pmb{I})^{-1}\pmb{y}
$$

From which we see that

$$
\pmb{w}^\star = \pmb{X}^\mathsf{T} (\pmb{K} + \lambda \pmb{I})^{-1}\pmb{y}
$$

This problem is in $n \times n$.