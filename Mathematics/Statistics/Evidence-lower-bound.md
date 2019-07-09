Evidence lower bound is the difference between the distribution of a latent variable and the distribution of the observed variable.

\begin{equation}
\operatorname{ELBO}(x; Q, \theta) = \sum_z Q(z)\log \frac{p(x, z; \theta)}{Q(z)}
\end{equation}