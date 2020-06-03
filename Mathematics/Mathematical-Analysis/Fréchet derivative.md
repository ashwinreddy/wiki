The **Frechet derivative** allows us to take derivatives for $f: \RR^n \to \RR^m$. The derivative $D f_x$ is given by the [[linear map]] $A_x: \RR^n \to \RR^m$ such that

$$
\lim_{ \lVert h \rVert \to 0 } \frac{\lVert f(x + h) - f(x) - A_x(h) \rVert}{ \lVert h \rVert } = 0
$$

For functions $\RR \to \RR$, the ordinary [[derivative]] corresponds to the Frechet derivative evaluated at a point with $h=1$.