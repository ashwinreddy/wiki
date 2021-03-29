2D Fourier transform. 

\begin{equation}
F(f_x, f_y) = \iint_{\RR^2 } f(x, y) e^{-\iota 2\pi (f_x x + f_y y)}\dd{x}\dd{y} \tag{Analysis}
\end{equation}


\begin{equation}
f(x, y) = \iint_{\RR^2 } F(x, y) e^{\iota 2\pi (f_x x + f_y y)}\dd{x}\dd{y} \tag{Synthesis}
\end{equation}

$$
f(x)g(y) \longleftrightarrow F(f_x)G(f_y)
$$

# Examples

$$
\sin(ax + by) \longleftrightarrow 2\im\pi^2 (  \delta(a + \omega_x, b+\omega_y) - \delta(a - \omega_x, b - \omega_y))
$$

$$
\cos(ax + by) \longleftrightarrow 2\pi^2 (  \delta(a - \omega_x, b-\omega_y) + \delta(a + \omega_x, b + \omega_y))
$$