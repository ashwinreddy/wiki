A **linear time-invariant (LTI) system** is a [[linear system]] and [[time-invariant system]].

# Causality

A causal system has $h(t) = 0$ or $h[n]=0$ $\forall t < 0, n < 0$.

# Convolution

The output of an LTI system is given by the [[convolution]] with the [[impulse response]]

$$
x(t) = \int \delta(t - \tau) x(\tau) \dd{\tau}
$$

\begin{align}
y(t) &= \int_\RR x(t) h(t - \tau) \dd{\tau} \\\\
&= h(t) * x(t)
\end{align}