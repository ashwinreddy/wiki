The **Gamma function** generalizes the factorial function.

\begin{equation}
\Gamma(n) = (n-1)!
\end{equation}

\begin{equation}
\Gamma(n) = \int\limits_0^\infty t^n e^{-t}\mathrm{d}t
\end{equation}

Using [[integration by parts]] with $u=t^n$ and $\mathrm{d}v = e^{-t}\mathrm{d}t$, we yield

\begin{equation}
\cancelto{0}{\left[-t^ne^{-t}\right]^\infty_0} + n \int\limits_0^\infty t^{n-1}e^{-t} \, \mathrm{d}t = n\cdot \Gamma(n-1)
\end{equation}