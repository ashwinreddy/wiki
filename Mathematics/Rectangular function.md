**Rectangular function**

$$
\mathsf{rect}(t) = \Pi(t) = \begin{cases} 1 & |t| \leqslant \frac{1}{2} \\\\ 0 & |t| > \frac{1}{2} \end{cases}
$$

$$
\mathsf{rect}\left(\frac{t-\tau}{T}\right) = \begin{cases}0 & t \leqslant \left(\tau - \frac{T}{2}\right) \\\\ 1 & T - \frac{\tau}{2} \leqslant t \leqslant T + \frac{\tau}{2} \\\\ 0 & t > \tau + \frac{T}{2} \end{cases}
$$

It can be formed from the [[Heaviside step function]]:

$$
\mathsf{rect}(t) = u\left(t + \frac{1}{2}\right) - u\left(t - \frac{1}{2}\right)
$$

The discrete version (c.f. prev definition, it is different) is

\begin{align\*}
\mathsf{rect}\left[\frac{n}{N}\right] &= \begin{cases} 1 & |n| \leqslant N \\\\ 0 & |n| > N \end{cases} \\\\
&= u[n + N] - u[n - 1 + N]
\end{align\*}

