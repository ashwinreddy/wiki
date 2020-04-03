**Evidence lower bound** is the difference between the distribution of a latent variable and the distribution of the observed variable.

Let $Q$ be a distribution over possible values of $z$. 

\begin{align}
\log p(x; \theta) &amp;= \log \sum_z p(x, z; \theta) &amp;&amp; \text{marginal to joint}\\\
&amp;= \log \sum_z Q(z) \frac{p(x, z; \theta)}{Q(z)} &amp;&amp; \text{multiply by unity}\\\
&amp;\geq  \sum_z Q(z) \log \frac{p(x, z; \theta)}{Q(z)} &amp;&amp; \href{../Jensens inequality}{\text{Jensen's inequality}}
\end{align}

\\[
\log \left(\mathbb{E}_{z \sim Q}\left[\frac{p(x, z; \theta)}{Q(z)}\right] \right) \geq \mathbb{E}\_{z \sim Q}\left[\log \frac{p(x, z; \theta)}{Q(z)}\right]
\\]

An equality will occur if the expectation is taken over a constant random variable, that is if for a constant $c$

\\[
\frac{p(x, z; \theta)}{Q(z)}=c
\\]

So we might as well just make $Q(z)=p(x, z; \theta)$ and normalize:

\begin{align}
Q(z) &amp;= \frac{p(x, z; \theta)}{\sum_z p(x, z; \theta)} \\\
&amp;= \frac{p(x, z; \theta)}{p(x; 
\theta)} \\\
&amp;= p(z | x; \theta)
\end{align}

\begin{equation}
\operatorname{ELBO}(x; Q, \theta) = \sum_z Q(z)\log \frac{p(x, z; \theta)}{Q(z)}
\end{equation}