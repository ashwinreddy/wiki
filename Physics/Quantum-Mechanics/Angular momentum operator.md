The **(orbital) angular momentum operator** in quantum mechanics corresponds closely to classical [[angular momentum]], which is given as $\vec{L} = \vec{r} \times \vec{p}$. We can extend this with the operator notation to mean

\begin{gather}
L_x = yp_z - z p_y \\\\
L_y = zp_x - x p_z \\\\
L_z = x p_y  - y p_x
\end{gather}

We might also interested in $L^2 \equiv L_x^2 + L_y^2 + L_z^2$. It turns out that

\begin{gather}
L^2 | \psi \rangle = \hbar^2 \ell (\ell + 1) | \psi \rangle \\\\\
L_z | \psi \rangle = \hbar m | \psi \rangle
\end{gather}

## Commutators

The algebra is summarized by the following equations

\begin{equation}
[L_i, L_j] = \iota\hbar\epsilon_{ijk}L_k
\end{equation}


\begin{equation}
\left[L^2, L_i\right] = 0
\end{equation}

* If $V(\vec{r}) = V(r)$, then $L_x$, $L_y$, and $L_z$ are conserved: $[H, L_x] = [H, L_y] = [H, L_z] = 0$

# Uncertainty

The [[uncertainty principle]] tells us that

$$
\sigma_{L_x}\sigma_{L_y} \geqslant \frac{\hbar}{2}\left| \langle L_z \rangle \right|
$$