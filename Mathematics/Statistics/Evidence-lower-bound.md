Evidence lower bound is the difference between the distribution of a latent variable and the distribution of the observed variable.

Let $Q$ be a distribution over possible values of $z$. 

\begin{align}
\log p(x; \theta) &= \log \sum_z p(x, z; \theta) \\\
&= \log \sum_z Q(z) \frac{p(x, z; \theta)}{Q(z)} \\\
&\geq  \sum_z Q(z) \log \frac{p(x, z; \theta)}{Q(z)}
\end{align}



\begin{equation}
\operatorname{ELBO}(x; Q, \theta) = \sum_z Q(z)\log \frac{p(x, z; \theta)}{Q(z)}
\end{equation}