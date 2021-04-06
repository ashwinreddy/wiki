**Exponential distribution** is a [[probability distribution]] of the time between events in a [[Poisson process]]. The [[probability density function]] is given by

\begin{equation}
X \sim \mathsf{Exponential}(\lambda) \iff \varphi_X(x) = \lambda e^{-\lambda x} u(x),
\end{equation}

where $u(x)$ is the [[Heaviside step function]]. The [[cumulative distribution function]] of the exponential distribution is

$$
F_X(x) = \left(1-e^{-\lambda x}\right)u(x)
$$

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\frac{1}{\lambda}$|
|[[Variance]]|$\frac{1}{\lambda^2}$|
|[[Moment-generating function]]|$\frac{\lambda}{\lambda - t}$ for $t < \lambda$|

If $X \sim \mathsf{Exp}(\lambda)$ and $Y \sim \mathsf{Exp}(\mu)$ are independent, then

$$
\mathbb{P}(X < Y) = \frac{\lambda}{\lambda + \mu}
$$


* If $n$ independent exponential variables indexed as $X_k$ with parameters $\lambda_k$, then $\min_k X_k \sim \mathsf{Exponential}\left(\sum_j \lambda_j \right)$. Also, 

$$
\Pr \left( X_i = \min_k X_k \right) = \frac{\lambda_i }{\sum_j \lambda_j}
$$