The **Fourier series** is a [[series]] decomposition of a [[periodic function]] $f(x)$ with fundamental period $T$ using a [[linear combination]] of [[sine waves|sine wave]] and cosine waves. For simplicity, let

$$
\omega_0 = \frac{2\pi}{T}
$$

We can allow a [[complex number]] to carry both the sine and cosine amplitudes in a meaningful way.

$$
f(t) = \sum_{k \in \mathbb{Z}} c_k e^{\iota k\omega_0 t} \tag{Synthesis Equation}
$$

$$
c_n = \frac{1}{T} \int_0^T f(t) e^{-\iota n \omega_0 t}\dd{t} \tag{Analysis Equation}
$$