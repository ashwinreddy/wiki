**Importance sampling** is a technique for computing an [[expected value]] of a [[function]] $f(X)$ over a [[probability distribution]] $p(x)$.

\begin{align}
\mathbb{E}_p\left[f(X)\right] &= \sum_x f(x) p(x) \\\\\
&= \sum_x \frac{f(x) p(x)}{q(x)}q(x) \\\\\
&= \mathbb{E}_q\left[ \frac{f(X) p(X)}{q(X)} \right]
\end{align}

