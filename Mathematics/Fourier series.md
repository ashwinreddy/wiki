The **Fourier series** is a [[series]] decomposition of a [[periodic function]] $f(x)$ with fundamental period $T$ using a [[linear combination]] of [[sine waves|sine wave]] and cosine waves. For simplicity, let

$$
\omega_0 = \frac{2\pi}{T}
$$

We can allow a [[complex number]] to carry both the sine and cosine amplitudes in a meaningful way since

$$
e^{\iota k \omega x} = \cos(k \omega x) + \iota \sin(k \omega x)
$$

$$
f(t) = \sum_{k = -\infty}^\infty c_k e^{\iota k\omega_0 t} \tag{Synthesis Equation}
$$

$$
c_k = \frac{1}{T} \int_0^T f(t) e^{-\iota k \omega_0 t}\dd{t} \tag{Analysis Equation}
$$

Then, $c_0$ is the average value of the function over one period.