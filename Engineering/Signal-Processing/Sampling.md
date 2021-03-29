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
X_d(e^{\im \Omega}) = \frac{1}{T}\sum_{n=-\infty}^\infty X_c\left( \frac{\Omega}{T} - n \frac{2\pi}{T} \right).
$$