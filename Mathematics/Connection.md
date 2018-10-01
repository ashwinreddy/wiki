A **connection** $\nabla$ (aka covariant derivative) on a smooth manifold $(M,\mathcal{O},\mathscr{A})$ is a map that takes a pair consisting of a vector field $X$ and a $(p,q)$-tensor field $T$ and sends them to a $(p,q)$-tensor field $\nabla_X T$ satisfying

1. For a scalar tensor field $f$, $\nabla_X f = Xf$ $\forall f \in C^\infty(M)$
2. $\nabla_X(T+S) = \nabla_X T + \nabla_X S$

A manifold with connection is a $(M, \mathcal{O},\mathscr{A},\nabla)$

# Connection Coefficient Functions

\begin{align}
\Gamma^i_{(x)\, jk}: U &\to \mathbb{R} \\\
p &\mapsto \left(\mathrm{d}x^i\left(\nabla_{\frac{\partial}{\partial x^k}}\frac{\partial}{\partial x_j}\right)\right)(p)
\end{align}

\\[
\left(\nabla_X Y\right)^i = X\left(Y^i\right) + \Gamma^i_{jm}Y^jX^m
\\]
$\let\sb_$

\\[
\left(\nabla_X \omega\right)_i = X\left(Y^i\right) + \Gamma^j\sb{im}\omega_jX^m
\\]

\begin{equation}
\bar {\Gamma }}^{k}{}_{ij}={\frac {\partial x^{p}}{\partial y^{i}}}\,{\frac {\partial x^{q}}{\partial y^{j}}}\,\Gamma ^{r}{}_{pq}\,{\frac {\partial y^{k}}{\partial x^{r}}}+{\frac {\partial y^{k}}{\partial x^{m}}}\,{\frac {\partial ^{2}x^{m}}{\partial y^{i}\partial y^{j}}
\end{equation}