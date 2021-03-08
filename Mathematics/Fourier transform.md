The **Fourier transform (FT)** is an [[integral transform]] when the [[Laplace transform]] variable $s = \iota\omega$.

# CTFT

$$
\mathcal{F}\\{x(t)\\} = \int_\RR x(t) e^{-\iota \omega t} \dd{t} \tag{CTFT Analysis}
$$

$$
\mathcal{F}^{-1}\\{X(\omega)\\} = \frac{1}{2\pi}\int_\RR X(\omega) e^{\iota \omega t} \dd{\omega} \tag{CTFT Synthesis}
$$


## Technical Details

We are going to assume that $x(t)$ is absolutely integrable.

# DTFT

$$
X(\omega) = \sum_{n=-\infty}^\infty x[n]e^{-\iota\omega n}
$$

# Properties


Linearity
: As a [[linear map]], $$\mathcal{F}\\{\alpha x(t) + \beta y(t)\\} = \alpha \mathcal{F}\\{x(t)\\} + \beta \mathcal{F}\\{y(t)\\}.$$

Time shift property
: $$\mathcal{F}\\{x(t-t_0)\\} = e^{-\iota\omega t_0}\mathcal{F}\\{x(t)\\}.$$

Conjugate property
: $$\mathcal{F}\\{x^\*(t)\\} = X^*(-\omega).$$

Time derivative property
: $$\mathcal{F}\left\\{\dv{x(t)}{t}\right\\} = \iota\omega X(\omega).$$

Time reversal property
: $$\mathcal{F}\\{x(-t)\\}=X(-\omega).$$

Time scaling
: $$\mathcal{F}\\{x(at)\\}=\frac{1}{a}X\left(\frac{\omega}{a}\right).$$

# Convolutions

$$
\mathcal{F}\\{ x(t) * h(t) \\}  = X(\omega)H(\omega)
$$


$$
\mathcal{F}\\{ x(t) h(t) \\}  = X(\omega) * H(\omega)
$$

# Common transforms

|Time|Expression|Frequency|
|----|----|---------|
|[[Dirac delta function]]|$\delta(t)$|1|
|Complex exponential|$\exp(j\omega_0 t)$|$2\pi \delta(\omega_0 - 1)$|
|One-sided decaying exponential|$e^{-at}u(t)$, $a > 0$|$\frac{1}{a + \iota \omega}$|
|[[Dirac comb]] of period $T$||$\sum_{n=-\infty}^\infty e^{-\iota\omega n T}$|
|[[Rectangular function]]|$\mathsf{rect}(t) = u(t + 1/2) - u(t - 1/2)$|$\operatorname{sinc}(\omega / 2)$|