The **Z-transform** $X$ of a DT signal $x[n]$ is

$$
X(z) = \sum_{n=-\infty}^\infty x[n] z^{-n}
$$

The region of convergence is $R_x = \\{z\in \mathbb{C} \mid  |X(z)| < \infty \\}$.

It is connected to the [[Discrete Fourier Transform]] by

$$
X[k]= X(z)|_{z = e^{\iota \frac{2\pi}{N} k}}
$$

# Properties

* [[Linearity|linear map]]

Accumulation
: $$\mathcal{Z}\left\\{\sum_{k=-\infty}^n x[k] \right\\}=\frac{1}{1-z^{-1}}X(z)$$

# Common Transforms

|Name|Signal|Transform|ROC|
|-----|------|---------|---|
|[[Kronecker Delta]]|$\delta[n]$|1|all $z$|
|Shifted Delta|$\delta[n-m]$|$z^{-m}$|all $z$ except ($z=0$ if $m>0$, $z=\infty$ if $m < 0$)|
|[[Heaviside step function]]|$u[n]$|$1 \over 1 - z^{-1}$| when $\vert z\vert > 1$ |
|Decayed step|$\alpha^n u[n]$|$1 \over 1 - \alpha z^{-1}$| when $\vert z\vert > \alpha$ |