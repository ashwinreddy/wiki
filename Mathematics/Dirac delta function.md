The **Dirac delta function** $\delta$ is roughly given by

$$
\delta(x) = \begin{cases} +\infty & x= 0 \\\\\ 0 & x \neq 0\end{cases}
$$

with its [[integral]]

$$
\int_\RR \delta(x - x_0)\\,\dd{x} = 1.
$$



We can think of it as a [[normal distribution]] with [[variance]] $\sigma^2 \to 0$. [[Kronecker delta]]

# Relationships

It is the [[derivative]] of the [[Heaviside step function]]:

$$
\delta(t) = \dv{u(t)}{t}
$$

# Properties

\begin{equation}
\int_\RR \delta(x - x_0)f(x) \\,\dd{x} = f(x_0) \tag{Sifting property}
\end{equation}

$$
t \neq T \implies \delta(t - T) = 0 
$$