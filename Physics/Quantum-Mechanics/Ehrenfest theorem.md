The **Ehrenfest theorem** describes the [[time derivative]] of the [[expected value]] of an [[observable]] $Q$:

\begin{equation}
\label{eq:ehren}
\boxed{\dv{}{t} \langle Q \rangle = \frac{\iota}{\hbar} \left\langle\left[\widehat{H}, \widehat{Q}\right] \right\rangle + \left\langle \pdv{\widehat{Q}}{t} \right\rangle} \tag{Ehrenfest Theorem}
\end{equation}

# Examples

Applying \ref{eq:ehren} to the position operator $\hat{x}_i$:

$$
\dv{}{t} \langle x_i \rangle = \left\langle \hat{p}_i \right\rangle
$$

Likewise, for $\hat{p}$

$$
\dv{}{t}\langle \hat{p} \rangle = - \left \langle \dv{V}{x} \right\rangle
$$