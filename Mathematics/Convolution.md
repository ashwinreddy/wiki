The **convolution** of two signals is given by

\begin{equation}
(f * g)(t) \doteq \int_\RR f(\tau)g(t-\tau)\dd{\tau}
\end{equation}

\begin{equation}
(f * g)[n] \doteq \sum_{k = -\infty}^\infty f[k]g[n-k]
\end{equation}

It can be easier to compute a convolution by means of a [[Laplace transform]].

# Properties

Suppose $y(t) = h(t) * x(t)$

Time-shift property
: $h(t-T_1) * x(t-T_2) = y(t - T_1 - T_2)$.

Commutative property
: $y(t) = x(t) * h(t)$.

* Distributive

# Examples

* Convolution of two [[rectangular function]] is [[triangular function]]