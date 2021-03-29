The **Dirac delta function** $\delta$ is roughly a sharp peak at input 0. Alternatively, we can think of it as a [[normal distribution]] with [[variance]] $\sigma^2 \to 0$.

\begin{equation}
\delta(x) = \begin{cases} +\infty & x= 0 \\\\\ 0 & x \neq 0\end{cases} \tag{Heuristic}
\end{equation}


\begin{equation}
\delta(t) = \int_\RR e^{\iota 2\pi ft} \dd{f} \tag{Technical Formulation}
\end{equation}

with its [[integral]]

$$
\int_\RR \delta(x - x_0)\\,\dd{x} = 1.
$$


 [[Kronecker delta]]

# [[Support]]

Suppose we have $\delta(t - f(t))$, then it's supported only when $t = f(t)$.


# Properties

* It is the [[derivative]] of the [[Heaviside step function]]:

$$
\delta(t) = \dv{u(t)}{t}
$$

$$
\delta(t) = \frac{1}{2\pi}\int_\RR e^{j\omega t} \dd{\omega}
$$

* \begin{equation}
\int_\RR \delta(x - x_0)f(x) \\,\dd{x} = f(x_0) \tag{Sifting property}
\end{equation}


* $\delta(at) = \frac{\delta(t)}{|a|}$
* If there is unique solution to $g(x_0) = 0$, $\delta(g(x)) = \frac{\delta(x-x_0)}{| g'(x_0) |}$