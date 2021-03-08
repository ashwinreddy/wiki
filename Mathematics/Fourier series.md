The **Fourier series** is a [[series]] decomposition of a [[periodic function]] $f(t)$ with fundamental period $T$ using a [[linear combination]] of [[sine waves|sine wave]] and cosine waves. For simplicity, let the fundamental frequency be $\omega_0 \equiv \frac{2\pi}{T}$.

We can allow a [[complex number]] to carry both the sine and cosine amplitudes in a meaningful way since

$$
e^{\iota k \omega x} = \cos(k \omega x) + \iota \sin(k \omega x)
$$

\begin{equation}
x(t) = \sum_{k = -\infty}^\infty c_k e^{\iota k\omega_0 t} \tag{Synthesis Equation}
\end{equation}

In discrete time, we have the following:

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n}
\end{equation}

# CTFS


$$
c_k = \frac{1}{T} \int_{\text{1 period}} x(t) e^{-\iota k \omega_0 t}\dd{t} \tag{Analysis Equation}
$$

Then, $c_0$ is the average value of the function over one period.


The [[Fourier transform]] given the coefficients $c_k$ is

$$
X(\omega) = 2\pi \sum_{k=-\infty}^\infty c_k \delta \left( \omega - \omega_0 k \right)
$$

# DTFS

$$
c_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-\iota k \omega_0 n}
$$

Although you can take the sum over any length $N$ interval.