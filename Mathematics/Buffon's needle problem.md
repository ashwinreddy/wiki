**Buffon's needle problem** asks what the probability of a needle of length $\ell$ randomly thrown on the ground will lie across two wooden boards. Let $Y$ be the random variable for the vertical distance between the needle and the closest horizontal line and $\Theta$ be the random variable for the angle between the needle and the vertical. Clearly, $0 \leq Y \leq \ell/2$ and $-\pi/2 \leq \Theta \leq \pi/2$. The joint distribution has uniform density over this rectangle of area $\pi\ell/2$.

$$
f(y, \theta) = \begin{cases} \frac{2}{\pi \ell} & (y,\theta)\in [0, \ell/2]\times[-\pi/2,\pi/2] \\ 0 & \end{cases}
$$

$$
\mathbb{P}[E] = \mathbb{P}\left[Y \leq \frac{\ell}{2} \cos\Theta\right] = \int\limits^{\pi/2}_{-\pi/2}\int\limits_0^{\ell\cos\theta/2} f(y,\theta)\dd{y}\dd{\theta}
$$

\begin{align\*}
\mathbb{P}[E] &= \int\limits^{\pi/2}\_{-\pi/2}\int\limits_0^{\ell\cos\theta/2} \frac{2}{\pi\ell}\dd{y}\dd{\theta} \\\\\
&= \int\limits^{\pi/2}\_{-\pi/2}\frac{\cancel{2}}{\pi\cancel\ell}\frac{\cancel\ell\cos\theta}{\cancel{2}}\dd{\theta} \\\\
&= \frac{2}{\pi}
\end{align\*}