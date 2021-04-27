The **Z-transform** $X$ of a discrete time signal $x[n]$ is the [[Laplace transform]] applied to a discrete signal.

$$
X(z) \equiv \sum_{n=-\infty}^\infty x[n] z^{-n},\qquad z \in \mathbb{C}
$$

# Region of Convergence

The region of convergence is 

$$
R_x = \\{z\in \mathbb{C} \mid  |X(z)| < \infty \\}
$$

* The RoC is a ring/disk centered at the origin.
* It does not contain any poles.
* If $x[n]$ is right-sided, RoC extends from the outmost pole to infinity.

# Example

Consider $x[n] = \alpha^n u[n]$. Then,

\begin{align}
X(z) &= \sum_{n=0}^\infty a^n z^{-n} \\\\
&= \sum_{n=0}^\infty \left(a z\^{-1}\right)^n \\\\
&= \frac{1}{1-az^{-1}}
\end{align}

where in the last step we spotted a [[geometric series]], so

$$
\mathsf{RoC} = \\{ |az^{-1}| < 1 \\} = \\{ |z| > |a| \\}.
$$

# Fourier Transform

It is connected to the [[Discrete Fourier Transform]] by

$$
X[k]= X(z)|_{z = e^{\iota \frac{2\pi}{N} k}}
$$

and the [[Discrete-time Fourier transform]] by

$$
X(z)|_{z=e^{\iota\omega}} = X(e^{\iota\omega})
$$

# Properties

* [[Linearity|linear map]]

$$
\mathcal{Z}\left\\{ x[n]*y[n] \right\\} = X(z)Y(z),\qquad \mathsf{RoC} \supseteq \left( R_x \cap R_y \right)
$$

Accumulation
: $$\mathcal{Z}\left\\{\sum_{k=-\infty}^n x[k] \right\\}=\frac{1}{1-z^{-1}}X(z)$$

Differentiation
: $$\mathcal{Z}\\{nx[n]\\} = -z\dv{X(z)}{z}, \quad \mathsf{RoC} = R$$

# Common Transforms

|Name|Signal|Transform|ROC|
|-----|------|---------|---|
|[[Kronecker Delta]]|$\delta[n]$|1|all $z$|
|Shifted Delta|$\delta[n-m]$|$z^{-m}$|all $z$ except ($z=0$ if $m>0$, $z=\infty$ if $m < 0$)|
|[[Heaviside step function]]|$u[n]$|$1 \over 1 - z^{-1}$| when $\vert z\vert > 1$ |
|Decayed step|$\alpha^n u[n]$|$1 \over 1 - \alpha z^{-1}$| when $\vert z\vert > \alpha$ |