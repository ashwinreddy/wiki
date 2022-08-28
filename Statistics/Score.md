The **score** is the [[gradient]] of the log-[[likelihood function]] w.r.t. parameters.

$$
s(\theta) = \frac{\partial}{\partial \theta} \log L(\theta)
$$

Recall that $L(\theta; x) = p_\theta(x)$.

\begin{align}
\mathbb{E}\_\theta\left[ \nabla_\theta \log p_\theta(x) \right] &= \int_\RR p_\theta(x) \nabla_\theta \log p_\theta(x) \\, \mathrm{d}x
\end{align}