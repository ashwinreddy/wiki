The **Fourier series** is a [[series]] decomposition of a [[periodic signal|periodic function]] using a [[linear combination]] of fixed frequency waves. In other words, we posit that all of the following formulations make sense

$$
x(t) &= a_0 + \sum_{n=-\infty}^\infty \left[ a_n \cos(n \omega_0 t) + b_n \sin(n \omega_0 t) \right]
$$

\end{align}
 \\\\
&= c_0 + \sum_{n=1}^\infty c_n \cos(n \omega_0 t + \phi_n) \\\\
&= \sum_{n=-\infty}^\infty x_n e^{\iota n \omega_0 t}
\end{align}





For continuous time, say $f(t)$ with fundamental period $T$. For simplicity, let the fundamental frequency be $\omega_0 \equiv \frac{2\pi}{T}$.

We can allow a [[complex number]] to carry both the sine and cosine amplitudes in a meaningful way since

$$
e^{\iota k \omega x} = \cos(k \omega x) + \iota \sin(k \omega x)
$$



# CTFS

Our claim is that a continuous periodic function can be written like

\begin{equation}
x(t) = \sum_{k = -\infty}^\infty c_k e^{\iota k\omega_0 t} \tag{Continuous Synthesis Equation}
\end{equation}

Then, we must have

\begin{equation}
c_k = \frac{1}{T} \int_{\text{1 period}} x(t) e^{-\iota k \omega_0 t}\dd{t} \tag{Analysis Equation}
\end{equation}

Then, $c_0$ is the average value of the function over one period.


The [[Fourier transform]] given the coefficients $c_k$ is

$$
X(\omega) = 2\pi \sum_{k=-\infty}^\infty c_k \delta \left( \omega - \omega_0 k \right)
$$

# DTFS


In discrete time, we have the following for a $x[n]$ with period $N$.

\begin{equation}
x[n] = \sum_{k=0}^{N-1} c_k e^{\iota k\omega_0 n}
\end{equation}

$$
c_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-\iota k \omega_0 n}
$$

Although you can take the sum over any length $N$ interval.