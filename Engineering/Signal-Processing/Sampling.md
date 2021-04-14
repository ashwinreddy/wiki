**Sampling** is selecting values periodically from a continuous-time signal $x_c(t)$ at some fixed time interval $T$. Equivalently, we can talk about a sampling frequency $f_s = \frac{1}{T}$ and $\omega_s = \frac{2\pi}{T}$. 

We have two ways of modeling this:

1. $$x_p(t) = p(t) x_c(t)$$

$$
p(t) \equiv \sum_{k=-\infty}^\infty \delta(t- kT) \tag{Sampling Operation}
$$

2. $$x_d[n] = x_c(nT)$$

# Fourier Transform

$$
X_p(\omega) = \frac{1}{T}\sum_{n=-\infty}^\infty X_c(\omega - n \omega_s)
$$

$$
X_d(e^{\im \Omega}) = \frac{1}{T}\sum_{n=-\infty}^\infty X_c\left( \Omega -  2\pi n \right).
$$

# Example

Consider sampling from $x(t) = \cos(\omega_0 t)$. Suppose we sample at $\omega_s = \frac{4}{3}\omega_0$. We get

$$
X_p\left(\omega\right) = \frac{\pi}{T_s} \sum_{k=-\infty}^\infty \delta\left(\omega - \left(k + \frac{3}{4}\right)\omega_s\right) +  \delta\left(\omega - \left(k - \frac{3}{4}\right)\omega_s\right)
$$

Now say we try to do a sinc interpolation by

$$
X_r(\omega) = T_s \mathsf{rect}(\omega / \omega_s) X_p(\omega)
$$