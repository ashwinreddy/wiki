The **Gaussian integral** is the [[integral]] of the [[Gaussian function]] $f(x) = e\^{-x^2}$ over the [[real number]] line.

$$
I = \int_\mathbb{R} e\^{-x^2} \dd{x}
$$

\begin{align\*}
I &= \sqrt{I^2} \\\\\
&= \sqrt{\left(\int_\mathbb{R} e\^{-x^2} \dd{x}\right)\left(\int_\mathbb{R} e\^{-x^2} \dd{x}\right)} \\\\\
&= \sqrt{\iint_{\RR^2} e\^{-\left(x^2 + y^2\right)}\\, \dd{x}\\,\dd{y} } \\\\\
&= \sqrt{\int_0^{2\pi} \int_0^\infty e\^{-r^2}\\, \dd{r}\\,\dd{\theta} } \\\\\
\end{align\*}