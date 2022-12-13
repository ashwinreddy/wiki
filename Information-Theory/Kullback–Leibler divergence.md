The **Kullback–Leibler divergence** is a [[divergence]] between distributions.

$$
D_{\rm KL}\left(p(X) \parallel q(X)  \right) = \mathbb{E}_{x \sim p(x)}\left[ \log\frac{p(x)}{q(x)} \right]
$$

[[Jensen's inequality]]

\begin{align\*}
D_{\rm KL}(p(X) \parallel q(X))  &\leqslant -\log \mathbb{E}\_{x \sim p(x)}\left[ \frac{q(x)}{p(x)} \right]  \\\\
& \leqslant - \log \int p(x) \frac{q(x)}{p(x)} \mathrm{d} x
\end{align\*}