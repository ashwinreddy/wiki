The **score** is the [[gradient]] of the log-[[Likelihood function]] w.r.t. parameters.

$$
s(\theta) = \frac{\partial}{\partial \theta} \log L(\theta)
$$

# Properties

* The [[Expected value]] of the score is 0.

Recall that $L(\theta; x) = p_\theta(x)$.

\begin{align}
\mathbb{E}\_\theta\left[ \nabla_\theta \log p_\theta(x) \right] &= \int_x p_\theta(x) \nabla_\theta \log p_\theta(x) \\, \mathrm{d}x \\\\
&= \int_x \frac{\nabla_\theta p_\theta(x)}{p_\theta(x)} p_\theta(x)\\, \mathrm{d}x \\\\
&= \int_x \nabla_\theta p_\theta(x) \\, \mathrm{d}x \\\\
&= \nabla_\theta \int_x  p_\theta(x) \\, \mathrm{d}x \\\\
&= \nabla_\theta 1 \\\\
&= 0
\end{align}