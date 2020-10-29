The **free particle** is a particle under no influence of a potential, i.e $V(x) = 0$. Then, we have for the T.I.S.E $\hat{H} \psi = E\psi$ the following

$$
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{x^2}} = E\psi
$$

The solution is more easily exposed in the form

$$
\frac{\dd{}^2 \psi}{\dd{x^2}} = -k^2 \psi,\qquad k = \frac{\sqrt{2mE}}{\hbar}
$$

We have

$$
\psi(x) = Ae^{\iota kx} + B e^{-\iota kx}
$$

Notice then that

$$
\Psi(x,t) = Ae^{\iota k \left(x - \frac{\hbar k}{2m}t\right)} + B e^{-\iota k\left(x + \frac{\hbar k}{2m}t\right)}
$$

We could further compact this by letting $k$ be a continuous index.

$$
\Psi_k (x,t) = A_k e^{\iota k \left(x-\frac{\hbar k}{2m}t\right)}
$$

Here's the problem: this $\Psi_k$ is not normalizable! So the general solution is not very useful. In practice, we have a $\Psi(x, 0)$. What we do is figure out the $A_k \equiv \phi(k)$ via a Fourier transform.

1. Compute

$$
\phi(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty \Psi(x, 0) e^{-\iota kx} \dd{x}
$$

2. The solution is given by

$$
\Psi(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^\infty \dd{k} \cdot \phi(k) \exp(\iota \left(kx - \frac{\hbar k^2}{2m}t \right) )
$$