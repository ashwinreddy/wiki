The **discrete-time Fourier transform (DTFT)** is the [[Fourier transform]] applied to a discrete signal $x[n]$ of length $N$.

\begin{equation} X(e^{\im \omega}) = \sum_{n = -\infty}^\infty x[n] e^{-\im \omega n} \tag{DTFT Analysis} \end{equation}

Despite $x[n]$ being discrete, $X$ is a continuous function of frequency. 

<<Note('Since the time signal is discrete, the frequency domain is $2\pi$-periodic.')>> 

\begin{equation}
x[n] = \frac{1}{2\pi} \int_{\langle 2\pi\rangle} X(e^{\im\omega}) e^{\im\omega n} \dd{\omega} \tag{DTFT Synthesis}
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
&= \sum_{n=-\infty}^\infty x[n] e^{-\im \omega n}
\end{align}

# Sampling the DTFT

Suppose you sampled $N$ samples from one cycle of the $X(e^{\im\omega})$, which we know is periodic.

$$
X_{1/T}\left(\frac{k}{NT}\right) = \sum_{n=-\infty}^\infty x[n] e^{-\im 2\pi \frac{k}{N}n}
$$

That's just the [[Discrete Fourier Transform]].

# DTFT of a DTFS

Suppose you have a signal $x[n]$ that has DTFS expansion

$$
x[n] = \sum_{k=0}^{N-1} a_k e^{\im \omega_0 k n}.
$$

Then the DTFT is given by

$$
X(e^{\im\omega}) = 2\pi \sum_{k=-\infty}^\infty a_k \delta(\omega - k \omega_0)
$$


# Even and Odd

* $x[n]$ is real, then DTFT is conjugate symmetric.
* If $x[n]$ is real and even, then DTFT is real and even.
* If $x[n]$ is real and odd, the DTFT is imaginary and odd.


If DTFT is real and odd, $x[n]$ is imaginary and odd.

# Properties

[[Linearity|Linear map]]
: $$ax[n] + by[n] \longleftrightarrow aX(\omega) + bY(\omega).$$

Time shift
: A delay of $n_0$ steps introduces a complex exponential factor. $$x[n-n_0] \longleftrightarrow e^{-\im\omega n_0}X(e^{\im\omega}).$$

Frequency shift
: $$e^{\im\omega_0 n}x[n] \longleftrightarrow X(e^{\im(\omega - \omega_0)}).$$

Time reversal
: $$x[-n] \longleftrightarrow X(e^{-\im \omega}).$$


Differentiation
: $$n x[n] \longleftrightarrow \im \dv{X(e^{\im\omega})}{\omega} $$

Multiplication
: $$x_1[n]x_2[n] \longleftrightarrow \frac{1}{2\pi}\int_{\langle 2\pi \rangle} X_1(e^{\im\omega}) X_2\left(e^{\im(\omega - \theta)}\right) \dd{\theta}$$

Conjugate symmetry
: $$x\^*[n] \longleftrightarrow X^*(e^{-\im\omega})$$

# Common transforms


|Time|Expression|Frequency|
|----|----|---------|
|[[Kronecker delta]]|$\delta[n]$|1|
|Constant|1|$Ш(2\pi \omega)$|
|Decaying step|$\alpha^n u[n]$|$\frac{1}{1 - \alpha e^{-\im\omega}}$, $\vert \alpha \vert < 1$|

# See also

* [[DFT|Discrete Fourier transform]].