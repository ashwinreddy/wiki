The **Gaussian integral** is the [[integral]] of the [[Gaussian function]] $f(x) = \exp\left(-x^2\right)$ over the [[real number]] line.

$$
I = \int_\mathbb{R} \exp\left(-x^2\right) \dd{x}
$$

\begin{align\*}
I &= \sqrt{I^2} \\\\\
&= \sqrt{\left(\int_\mathbb{R} \exp\left(-x^2\right) \dd{x}\right)\left(\int_\mathbb{R} \exp\left(-x^2\right) \dd{x}\right)} \\\\\
&= \sqrt{\iint_{\RR^2} \exp\left(-x^2\right) \exp\left(-y^2\right)\\, \dd{x}\\,\dd{y} } \\\\\
&= \sqrt{\iint_{\RR^2} e\^\left(-\left(x^2 + y^2\right)\right)\\, \dd{x}\\,\dd{y} } \\\\\
\end{align\*}