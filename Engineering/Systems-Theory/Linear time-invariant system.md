A **linear time-invariant (LTI) system** is a [[linear system]] and [[time-invariant system]].

# Properties

## Convolution

The output of an LTI system is given by the [[convolution]] with the [[impulse response]]

$$
x(t) = \int \delta(t - \tau) x(\tau) \dd{\tau}
$$

\begin{align}
y(t) &= \int_\RR x(t) h(t - \tau) \dd{\tau} \\\\
&= h(t) * x(t)
\end{align}