The **Laplace transform** is an [[integral transform]] using a decaying [[complex exponential]]. 

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_0^\infty f(t) e^{-st} \dd{t} \tag{Unilateral Laplace}
\end{equation}

\begin{equation}
\mathscr{L} \left\\{ f(t) \right\\} \triangleq \int_{-\infty}^\infty f(t) e^{-st} \dd{t} \tag{Bilateral Laplace}
\end{equation}

where $s$ is a [[complex number]]. When you apply it to a discrete signal, you get the [[z-transform]]

The transform can be used to turn [[differential equation]] into algebraic ones that can be solved easily and converted back into solutions.

[[_TOC_]]

# Premise

The Laplace transform is the continuous version of the LHS in

$$
\sum_{n=0}^\infty a_n x^n \to \int_0^\infty a(t) x^t \dd{t}
$$

We replace $x^t$ with $e^{-st}$ to make it easier to work with.


# [[Fourier Transform]]

The Laplace Transform is related to the Fourier Transform in

$$
\mathscr{L}\{ x(t) \} = \mathcal{F}\{x(t)e^{-\sigma t}\} \quad \text{where } \sigma = \Re\{s\}
$$

The transform has similar properties. It can exist even when the Fourier Transform does not. Finally, it can solve integro-differential equations.

# Region of Convergence

The Region of Convergence is the set $s \in \mathbb{C}$ whose real part $\sigma$ is such that the Fourier integral of $x(t)e^{-\sigma t}$ converges. If the ROC includes $\sigma=0$, the Fourier transform exists.

For example, take $e^{-at}u(t)$. The Fourier transform is $$X(\omega) = {1\over \iota\omega + a}$$ for $a>0$. On the other hand, the Laplace transform is $$\frac{1}{s+a}=\frac{1}{\iota\omega + (\sigma+a)}.$$ So we require $\sigma + a > 0$ or $\sigma > -a$.

The time domain $x(t)$ can't (always??) be determined uniquely unless the ROC is specified. $1 \over s + 1$ could be $e^{-t}u(t)$ with $\Re\\{s\\} > -1$ or $-e^{-t}u(t)$ for $\Re\\{s\\} < -1$.

Let's say RoC is a half-plane, either to left or right. Then, for two signals we have a matrix of typical possibilities.

||Left|Right|
|---|----|-----|
|**Left**|Further left|No overlap|
|**Right**|Overlap|Further Right|

# Properties

[[Linearity|Linear map]]
: $$ax_1(t) + bx_2(t) \leftrightarrow aX_1(s) + bX_2(s),$$ typically with $\mathsf{RoC} = R_1 \cap R_2$.

Time Shift
: $$x(t-t_0) \leftrightarrow e^{-st_0}X(s)$$ with RoC unchanged.

Time Scaling
: $$x(at) \leftrightarrow \frac{1}{|a|}X\left(\frac{s}{a}\right)$$ with $\mathsf{RoC} = aR$.

Conjugation
: $$x\^\*(t) \leftrightarrow X\^\*\left(s^*\right)$$ with RoC unchanged.

Convolution
: $$x_1(t) * x_2(t) \leftrightarrow X_1(s)X_2(s),$$ with $\mathsf{RoC} = R_1 \cap R_2$.

[[Time Differentiation|Time derivative]]
: $$\dv{x(t)}{t} \longleftrightarrow sX(s)$$

Differentiation in $s$-Domain
: $$-tx(t) \longleftrightarrow \dv{X(s)}{s}$$

# Common Transforms

|Name|$f(t)$|$F(s)$|RoC|
|----|------|------|---|
|[[Dirac delta function]]|$\delta(t)$|$1$|all $s$|
||$\delta(t-T)$|$e^{-sT}$|all $s$|
||$e^{-at}u(t)$|$\frac{1}{s-a}$|$\Re \\{s\\} > -a$|
||$\cos(\omega_0)u(t)$|$s \over s^2 + \omega_0^2$|$\Re\\{ s\\} > 0$|
||$\sin(\omega_0)u(t)$|$\omega_0 \over s^2 + \omega_0^2$|$\Re \\{s\\} > 0$|