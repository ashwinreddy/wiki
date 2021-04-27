The **Laplace transform** is an [[integral transform]] using a decaying [[exponential function]]. 

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_0^\infty f(t) e^{-st} \dd{t} \tag{Unilateral Laplace}
\end{equation}

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_{-\infty}^\infty f(t) e^{-st} \dd{t} \tag{Bilateral Laplace}
\end{equation}

where $s$ is a [[complex number]]. 

The transform can be used to turn [[differential equation]] into algebraic ones that can be solved easily and converted back into solutions.

# [[Fourier Transform]]

$$
\mathscr{L}\\{ x(t) \\} = \mathcal{F}\\{x(t)e^{-\sigma t}\\} \quad \text{where } \sigma = \Re\\{s\\}
$$

# Region of Convergence

The Region of Convergence is the set $s \in \mathbb{C}$ whose real part $\sigma$ is such that the Fourier integral of $x(t)e^{-\sigma t}$ converges. If the ROC includes $\sigma=0$, the Fourier transform exists.

The time domain $x(t)$ can't be determined uniquely unless the ROC is specified. $1 \over s + 1$ could be $e^{-t}u(t)$ with $\Re\\{s\\} > -1$ or $-e^{-t}u(t)$ for $\Re\\{s\\} < -1$


# Origin

As [this](https://www.youtube.com/watch?v=hqOboV2jgVo) video explains, the Laplace transform is the continuous version of the LHS in

$$
\sum_{n=0}^\infty a_n x^n \to \int_0^\infty a(t) x^t \dd{t}
$$

We replace $x^t$ with $e^{-st}$ to make it easier to work with.

# Properties

[[Linearity|Linear map]]
: 

Time Shift
: $$x(t-t_0) \leftrightarrow e^{-st_0}X(s)$$

[[Time Differentiation|Time derivative]]
: $$\dv{x(t)}{t} \longleftrightarrow sX(s)$$

Differentiation in $s$-Domain
: $$-tx(t) \longleftrightarrow \dv{X(s)}{s}$$

# Common Transforms

|Name|$f(t)$|$F(s)$|RoC|
|----|------|------|---|
|[[Dirac delta function]]|$\delta(t)$|$1$|all $s$|
||$\delta(t-T)$|$e^{-sT}$|all $s$|
||$\cos(\omega_0)u(t)$|$s \over s^2 + \omega_0^2$|$\Re s > 0$|
||$\sin(\omega_0)u(t)$|$\omega_0 \over s^2 + \omega_0^2$|$\Re s > 0$|