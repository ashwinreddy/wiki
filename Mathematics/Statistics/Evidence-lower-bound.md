Evidence lower bound is the difference between the distribution of a latent variable and the distribution of the observed variable.

Let $Q$ be a distribution over possible values of $z$. 

\begin{align}
\log p(x; \theta) &= \log \sum_z p(x, z; \theta) && \text{marginal to joint}\\\
&= \log \sum_z Q(z) \frac{p(x, z; \theta)}{Q(z)} && \text{multiply by unity}\\\
&\geq  \sum_z Q(z) \log \frac{p(x, z; \theta)}{Q(z)} && \href{../Jensens inequality}{\text{Jensen's inequality}}
\end{align}

\\[
\log \left(\mathbb{E}_{z \sim Q}\left[\frac{p(x, z; \theta)}{Q(z)}\right] \right) \geq \mathbb{E}\_{z \sim Q}\left[\log \frac{p(x, z; \theta)}{Q(z)}\right]
\\]

An equality will occur if the expectation is taken over a constant random variable, that is if for a constant $c$

\\[
\frac{p(x, z; \theta)}{Q(z)}=c
\\]


\begin{equation}
\operatorname{ELBO}(x; Q, \theta) = \sum_z Q(z)\log \frac{p(x, z; \theta)}{Q(z)}
\end{equation}