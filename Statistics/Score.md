The **score** is the [[gradient]] of the log-[[likelihood function]].

$$
s(\theta) = \frac{\partial}{\partial \theta} \log L(\theta)
$$

\begin{align}
\mathbb{E}_\theta\left[\nabla_\theta \log L(\theta) \right] &= \int_x L(\theta) \nabla_\theta \log L(\theta) \mathrm{d}x
\end{align}