The **free particle** is a particle under no influence of a potential, i.e $V(x) = 0$. Then, we have for the T.I.S.E $\hat{H} \psi = E\psi$ the following

$$
-\frac{\hbar^2}{2m} \frac{\dd{]^2 \psi}{\dd{x^2}}
$$






has stationary states that are _not_ normalizable. 

> There is no such thing as a free particle with definite energy.

But the stationary states are still useful. The general solution to the time-dependent Schrodinger equation is a linear combination of the separable solutions, but it's an integral over a continuous index now.

$$
\Psi(x,t)= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} \phi(k)e^{\iota(kx - \omega t)}\dd{k},\quad \omega = \frac{\hbar k^2}{2m}
$$

$$
\phi(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} \Psi(x,0)e^{-\iota kx}\dd{x}
$$