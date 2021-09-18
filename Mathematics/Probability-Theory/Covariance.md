The **covariance** of [[random variables|random variable]] $X$ and $Y$ is the [[expected value]] of the product of $X-\mu_X$ and $Y-\mu_Y$.

\begin{equation}
\operatorname{cov}(X, Y) \triangleq \mathbb{E}\left[(X - \mu_X)(Y- \mu_Y)\right]
\end{equation}

\begin{equation}
\operatorname{cov}(X, Y) = \mathbb{E}[XY] - \mathbb{E}[X] \mathbb{E}[Y]
\end{equation}

[[Variance]] is just covariance filled out with the same argument in both places.

Covariance is [[bilinear map]], so

$$
\operatorname{cov}(aX + bY,Z) = a\operatorname{cov}(X,Z) + b\operatorname{cov}(Y,Z)
$$

# Properties

* If $X$ and $Y$ are [[independent|independence]], then $\operatorname{cov}(X, Y) = 0$. But you can't assume the converse in general!