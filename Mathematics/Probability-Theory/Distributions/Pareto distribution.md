The **Pareto distribution** is a power-law distribution

$$
{\displaystyle {\overline {F}}(x)=\Pr(X>x)={\begin{cases}\left({\frac {x_{\mathrm {m} }}{x}}\right)^{\alpha }&x\geq x_{\mathrm {m} },\\\\ 1&x<x_{\mathrm {m} }\end{cases}}}
$$

With $x_m > 0$ and $\alpha > 0$.

\begin{align\*}
\mathbb{E}\left[X\right] &= \int_{x_m}^\infty  \alpha\left( \frac{x_m}{x}\right)^\alpha \\,\dd{t} \\\\
&= \alpha 
\end{align\*}

# Lindy effect

If $T$ is a random variable representing a lifetime,

\begin{align\*}
\mathbb{E}\left[T \mid T > t_0\right] = \frac{\alpha}{\alpha - 1}t_0
\end{align\*}

Thus, the additional life time is $\mathbb{E}\left[T - t_0 \mid T > t_0\right] = \frac{t_0}{\alpha - 1}$, proportional to how long it has been around.