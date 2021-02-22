The **Fourier transform (FT)** is an [[integral transform]] when the [[Laplace transform]] variable $s = \iota\omega$.

$$
\mathcal{F}\\{x(t)\\} = \int_\RR x(t) e^{-\iota \omega t} \dd{t} \tag{CTFT Analysis}
$$

$$
\mathcal{F}^{-1}\\{X(\omega)\\} = \frac{1}{2\pi}\int_\RR X(\omega) e^{\iota \omega t} \dd{\omega} \tag{CTFT Synthesis}
$$

# Technical Details

We are going to assume that $x(t)$ is absolutely integrable.

# Properties

* [[Linear map]] means $$\mathcal{F}\\{\alpha x(t) + \beta y(t)\\} = \alpha \mathcal{F}\\{x(t)\\} + \beta \mathcal{F}\\{y(t)\\}$$.
* Time shift means $$\mathcal{F}\\{x(t-t_0)\\} = e^{-\iota\omega t_0}\mathcal{F}\\{x(t)\\}$$.

The transform of the conjugate of a function is given by

$$
\mathcal{F}\\{x^\*(t)\\} = X^*(-\omega).
$$

$$
\mathcal{F}\left\\{\dv{x(t)}{t}\right\\} = \iota\omega X(\omega)
$$

# Convolutions

$$
\mathcal{F}\\{ x(t) * h(t) \\}  = X(\omega)H(\omega)
$$

# Common transforms

|Time|Frequency|
|----|---------|
|[[Dirac delta function]]: $\delta(t)$|1|
|$\exp(j\omega_0 t)$|$2\pi \delta(\omega_0 - 1)$|
