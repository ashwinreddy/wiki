The **Cramer-Rao inequality** or **Cramer-Rao Lower Bound (CRLB)** says the [[mean squared error]] of any unbiased estimator (i.e. the [[variance]] of the estimator) is at least the reciprocal [[Fisher information]].

\begin{equation}
\sigma^2_\theta \geq \mathsf{CRLB} = \frac{1}{ \mathcal{I}(\theta)} \tag{Cramer-Rao Inequality}
\end{equation}

Thus, high Fisher information means the possibility of a lower variance estimator. The CRLB allows us to define the efficiency of an estimator

Efficiency
: The ratio of inverse Fisher information to variance. $$e \doteq {\mathcal{I}(\theta)^{-1} \over \sigma^2_\theta}$$

The Cramer-Rao inequality tells us that efficiency has an upper bound of 1.

$$
e \leq 1
$$