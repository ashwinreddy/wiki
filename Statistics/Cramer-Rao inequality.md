The **Cramer-Rao inequality** or **Cramer-Rao Lower Bound (CRLB)** gives a lower bound for the [[MSE|mean squared error]] of any unbiased estimator ([[variance]]) is at least the reciprocal [[Fisher information]].

\begin{equation}
\sigma^2_\theta \geq \mathsf{CRLB} = \frac{1}{ \mathcal{I}(\theta)} \tag{Cramer-Rao Inequality}
\end{equation}

Thus, high Fisher information means the possibility of a lower variance estimator.

Another way of saying this is that efficiency is maxed at 1.

Efficiency
: The ratio of inverse Fisher information to variance. $$e = {\mathcal{I}(\theta)^{-1} \over \sigma^2_\theta}$$

The Cramer-Rao inequality tells us that efficiency has an upper bound of 1.

$$
e \leq 1
$$