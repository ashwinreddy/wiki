The **Fourier series** is a [[series]] decomposition of a [[periodic function]] $f(x)$ with period $T$ using a [[linear combination]] of [[sine waves|sine wave]] and cosine waves. 

$$
f(t) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos\left(\frac{2\pi nt}{T}\right) + \sum_{n=1}^\infty b_n \sin\left(\frac{2\pi nt}{T}\right)
$$

\begin{align}
a_0 &= \frac{1}{T}\int_0^T f(t)\\,\dd{t} \\\\\
a_n &= \frac{2}{T} \int_0^T f(t) \cos\left(\frac{2\pi nt}{T}\right) \\,\dd{t} \\\\
b_n &= \frac{2}{T} \int_0^T f(t) \sin\left(\frac{2\pi nt}{T}\right) \\,\dd{t}
\end{align}

$$
f(t) = \sum_{k=-\infty}^\infty c_n e^{\iota \frac{2\pi kt}{T}}
$$