The continuous time **Fourier transform (CTFT / FT)** is an [[integral transform]] that can be thought of as representing a [[function]] in a frequency domain. On a technical level, it is an [[integral transform]] when the [[Laplace transform]] variable $s = \iota\omega$. It is related to the [[Fourier series]].

$$
\mathcal{F}\\{x(t)\\} = \int_\RR x(t) e^{-\iota \omega t} \dd{t} \tag{CTFT Analysis}
$$

$$
\mathcal{F}^{-1}\\{X(\omega)\\} = \frac{1}{2\pi}\int_\RR X(\omega) e^{\iota \omega t} \dd{\omega} \tag{CTFT Synthesis}
$$


[[_TOC_]]

# Technical Details

We are going to assume that $x(t)$ is absolutely integrable.

# Properties


[[Linearity|linear map]]
: $$ax(t)+by(t) \longleftrightarrow aX(\omega) + bY(\omega).$$

Time shift property
: $$x(t-t_0) \longleftrightarrow X(\omega)e^{-\iota\omega t_0}.$$

Frequency shift property
: $$x(t)e^{\iota \omega_0 t} \longleftrightarrow X(\omega - \omega_0).$$

Conjugate property
: Let $x\^\*(t) \longleftrightarrow X\^*(-\omega).$$

Time derivative property
: $$\mathcal{F}\left\\{\dv{x(t)}{t}\right\\} = \iota\omega X(\omega).$$

Time reversal property
: $$\mathcal{F}\\{x(-t)\\}=X(-\omega).$$

Time scaling
: $$\mathcal{F}\\{x(at)\\}=\frac{1}{|a|}X\left(\frac{\omega}{a}\right).$$

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