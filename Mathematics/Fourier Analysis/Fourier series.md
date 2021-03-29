The **(continuous time) Fourier series (CTFS)** is a [[series]] decomposition of a [[periodic signal|periodic function]] $x(t)$ using a [[linear combination]] of fixed frequency waves. Let the fundamental frequency be $\omega_0 \equiv \frac{2\pi}{T}$ where $T$ is the fundamental period of $x(t)$.


\begin{equation}
x(t) = \sum_{k = -\infty}^\infty c_k e^{\iota k\omega_0 t} \tag{Synthesis}
\end{equation}


\begin{equation}
\label{eq:analysis}
c_k = \frac{1}{T} \int_{\langle T \rangle} x(t) e^{-\iota k \omega_0 t}\dd{t} \tag{Analysis Equation}
\end{equation}

where $\langle T \rangle$ denotes any contiguous interval of length $T$.


In other words, we posit that all of the following formulations make sense:

\begin{align}
x(t) &= a_0 + \sum_{n=1}^\infty \left[ a_n \cos(n \omega_0 t) + b_n \sin(n \omega_0 t) \right] \\\\
&= c_0 + \sum_{n=1}^\infty c_n \cos(n \omega_0 t + \phi_n) \\\\
&= \sum_{n=-\infty}^\infty x_n e^{\iota n \omega_0 t}
\end{align}


# Analysis

You can see from \ref{eq:analysis} that $c_0$ is the average value of the function over one period.

# Fourier Transform

The [[Fourier transform]] given the coefficients $c_k$ is

$$
X(\omega) = 2\pi \sum_{k=-\infty}^\infty c_k \delta \left( \omega - \omega_0 k \right)
$$

# See also

* [[Discrete Fourier series]]