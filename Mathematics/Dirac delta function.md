The **Dirac delta function** $\delta$ is roughly given by

$$
\delta(x) = \begin{cases} +\infty & x= 0 \\\\\ 0 & x \neq 0\end{cases}
$$

with its [[integral]]

$$
\int_\RR \delta(x - x_0)\\,\dd{x} = 1.
$$



We can think of it as a [[normal distribution]] with [[variance]] $\sigma^2 \to 0$. [[Kronecker delta]]

# [[Support]]

Suppose we have $\delta(t - f(t))$, then it's support is only when $t = f(t)$.

# Properties

* It is the [[derivative]] of the [[Heaviside step function]]:

$$
\delta(t) = \dv{u(t)}{t}
$$

$$
\delta(t) = \int_\RR e^{j\omega t} \dd{\omega}
$$

* \begin{equation}
\int_\RR \delta(x - x_0)f(x) \\,\dd{x} = f(x_0) \tag{Sifting property}
\end{equation}


* $\delta(at) = \frac{\delta(t)}{|a|}$
* If there is unique solution to $g(x_0) = 0$, $\delta(g(x)) = \frac{\delta(x-x_0)}{| g'(x_0) |}$