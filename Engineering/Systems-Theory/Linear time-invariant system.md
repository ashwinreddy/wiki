A **linear time-invariant (LTI) system** is a [[linear system]] and [[time-invariant system]].


# Discrete-Time LTI System

A block diagram shows

$$
x[n] \rightarrow \boxed{h[n]} \rightarrow y[n] = (h*x)[n]
$$

From the convolution property of the [[z-transform]],

$$
Y(z) = H(z)X(z)
$$

where the [[transfer function]] is 

$$
H(z) = \mathcal{Z}\\{ h[n] \\} = \sum_{n=-\infty}^\infty h[n] z^{-n}.
$$


# Convolution

The output of an LTI system is given by the [[convolution]] with the [[impulse response]]

$$
x(t) = \int \delta(t - \tau) x(\tau) \dd{\tau}
$$

\begin{align}
y(t) &= \int_\RR x(t) h(t - \tau) \dd{\tau} \\\\
&= h(t) * x(t)
\end{align}

# Stable & Causal

By considering [[BIBO stability]] and [[causal system]] together, we conclude


* **Continuous time**: A causal LTI system with rational transfer function $H(s)$ is stable iff all [[poles|zeros and poles]] of $H(s)$ have strictly negative real parts.

* **Discrete time** A causal LTI system with transfer function (from [[z-transform]]) $H(z)$ is stable iff all poles of $H(z)$ lie strictly inside the unit circle.