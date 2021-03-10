The **discrete-time Fourier transform (DTFT)** is the [[Fourier transform]] applied to a discrete signal $x[n]$ of length $N$.

\begin{equation} X(e^{\iota\omega}) = \sum_{n = -\infty}^\infty x[n] e^{-\iota\omega n} \tag{DTFT Analysis} \end{equation}

Despite $x[n]$ being discrete, $X$ is a continuous function of frequency. It is also $2\pi$-periodic.

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{\langle 2\pi\rangle} X(e^{\iota\omega}) e^{\iota\omega n} \dd{\omega} \tag{DTFT Synthesis}
\end{equation}

where $\langle 2\pi\rangle$ is any contiguous interval of length $2\pi$.

[[_TOC_]]

# Extension of Fourier Transform

Let's push our discrete signal $x[n]$ into continuous time using a train of deltas.

$$
x(t) \triangleq \sum_{n=-\infty}^\infty x[n]\delta(t-n)
$$

\begin{align}
X(\omega) &= \mathcal{F}\\{x(t)\\} \\\\
&= \mathcal{F}\left\\{ \sum_{n=-\infty}^\infty x[n] \delta(t-n) \right\\}  \\\\
&= \sum_{n=-\infty}^\infty x[n] e^{-\iota \omega n}
\end{align}

# DTFT of a DTFS

Suppose you have a signal $x[n]$ that has DTFS expansion

$$
x[n] = \sum_{k=0}^{N-1} a_k e^{\iota \omega_0 k n}.
$$

Then the DTFT is given by

$$
X(e^{\iota\omega}) = 2\pi \sum_{k=-\infty}^\infty a_k \delta(\omega - k \omega_0)
$$


# Even and Odd

* If $x[n]$ is real and even, then DTFT is real and even.
* If $x[n]$ is real and odd, the DTFT is imaginary and odd.

# Properties

[[Linearity|Linear map]]
: $$ax[n] + by[n] \longleftrightarrow aX(\omega) + bY(\omega).$$

Time shift
: $$x[n-n_0] \longleftrightarrow e^{-\iota\omega n_0}X(e^{\iota\omega}).$$

Frequency shift
: $$e^{\iota\omega_0 n}x[n] \longleftrightarrow X(e^{\iota(\omega - \omega_0)}).$$

Time reversal
: $$x[-n] \longleftrightarrow X(e^{-\iota \omega}).$$


Differentiation
: $$n x[n] \longleftrightarrow \iota \dv{X(e^{\iota\omega})}{\omega} $$

Multiplication
: $$x_1[n]x_2[n] \longleftrightarrow \frac{1}{2\pi}\int_{\langle 2\pi \rangle} X_1(e^{\iota\omega}) X_2(e^{\iota(\omega - \theta)}) \dd{\theta}$$

# Common transforms


|Time|Expression|Frequency|
|----|----|---------|
|[[Kronecker delta]]|$\delta[n]$|1|
|Constant|1|$Ш(2\pi \omega)$|
|Decaying step|$\alpha^n u[n]$|$\frac{1}{1 - \alpha e^{-\iota\omega}}$, $\vert \alpha \vert < 1$|