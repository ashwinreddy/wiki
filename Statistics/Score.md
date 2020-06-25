The **score** is given by the gradient of the log of the likelihood function $\ell$ crafted from density $f$.

$$
s(\theta) = \pdv{ }{\theta}\log\ell(\theta)
$$

The [[expectation]] of the score is 0.

\begin{align}
\mathbb{E}[s \mid \theta] &= \int_{\mathcal{X}} f(x; \theta) s(\theta) \dd{x} \\\\\
&= \int_{\mathcal{X}} \pdv{f(x; \theta)}{\theta}  \dd{x} \\\\\
&= \pdv{}{\theta}\int_{\mathcal{X}} f(x; \theta)  \dd{x}
\end{align}

