The **variance** of a [[random variable]] $X$ is a measure of spread by seeing on average how far away $X$ is from its mean or [[expected value]] $\mu_X = \mathbb{E}[X]$. 

\begin{align\*}
\mathbb{V}[X] &\doteq \mathbb{E}\left[\left(X - \mu_X\right)^2\right] \\\\
&= \mathbb{E}\left[X^2\right] - \mu_X^2
\end{align\*}

# Properties

* Variance is the [[covariance]] of a variable with itself: $\mathbb{V}[X] = \operatorname{cov}(X, X)$

* $\mathbb{V}[X + Y] = \mathbb{V}[X] + 2\operatorname{cov}(X, Y) + \mathbb{V}[Y]$

* A variance is always non-negative: $$\mathbb{V}[X] \geqslant 0$$

* $$\mathbb{V}[\alpha X] = \alpha^2 \mathbb{V}[X].$$ In particular, this means that $\mathbb{V}[-X] = \mathbb{V}[X]$.

$$
\mathbb{V}[c + X] = \mathbb{V}[X]
$$

$$
\Pr(X = 0) \leqslant \frac{\mathbb{V}(X)}{(\mathbb{E}X)^2}
$$

* [[Law of total variance]]