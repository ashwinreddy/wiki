The **Pareto distribution** is a power-law distribution

$$
{\displaystyle {\overline {F}}(x)=\Pr(X>x)={\begin{cases}\left({\frac {x_{\mathrm {m} }}{x}}\right)^{\alpha }&x\geq x_{\mathrm {m} },\\\\ 1&x<x_{\mathrm {m} }\end{cases}}}
$$

With $x_m > 0$ and $\alpha > 0$

# Lindy effect

If $T$ is a random variable representing a lifetime,

\begin{align\*}
\mathbb{E}\left[T \mid T > t_0\right] &= \int_\mathbf{R} t f(t \mid t > t_0) \\,\dd{t} \\\\
&= \int_{t_0}^{\infty} t \frac{f(t)}{\overline {F}(t) } \\,\dd{t} \\\\
&= \int_{t_0}^{\infty} t \frac{\alpha t_m^\alpha }{ t^{\alpha + 1} (t_m / t)^\alpha } \\,\dd{t}  \\\\
&= \int_{t_0}^{\infty} t \frac{\alpha t_m^\alpha }{ t^{\alpha + 1} (t_m / t)^\alpha } \\,\dd{t}  \\\\
\end{align\*}