The **Kullback–Leibler divergence** is a [[divergence]] between distributions.

$$
D_{\rm KL}\left(p(X) \parallel q(X)  \right) = \mathbb{E}_{x \sim p(x)}\left[ \log\frac{p(x)}{q(x)} \right]
$$

[[Jensen's inequality]]

\begin{gather\*}
\mathbb{E}\_{x \sim p(x)}\left[ \log\frac{p(x)}{q(x)} \right] \leqslant  \log \mathbb{E}\_{x \sim p(x)}\left[ \frac{p(x)}{q(x)} \right] \\\\
\mathbb{E}\_{x \sim p(x)}\left[ \log\frac{p(x)}{q(x)} \right] \geqslant  \log \mathbb{E}_{x \sim p(x)}\left[ \frac{q(x)}{p(x)} \right]
\end{gather\*}