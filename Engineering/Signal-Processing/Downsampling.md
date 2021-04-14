**Downsampling** is the [[sampling]] of a signal in a way that compresses the information.

# $N$-fold downsampler

This downsampler takes a discrete signal $x: \mathbb{Z} \to \RR$ and outputs for fixed $N$,

$$
y[n] = x[nN]
$$

We can rewrite this with

$$
p[n] = \sum_{k=-\infty}^\infty \delta[n - kN].
$$

$$
y[n] = x[n]p[n]
$$

It turns out that the [[discrete-time Fourier transform]] pair is the following:

$$
p[n] \longleftrightarrow P(e^{\im \omega}) = \omega_s \sum_{k=-\infty}^\infty \delta(\omega - k \omega_s), qquad \omega_s = \frac{2\pi}{N}
$$
