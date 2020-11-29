The **angular momentum operator** in quantum mechanics can refer to the following:

* the total angular momentum
* the orbital angular momentum $\vec{L}$ corresponds closely to [[angular momentum]] in classical mechanics
* spin angular momentum










is a vector operator $\vec{L} = (L_x, L_y, L_z)$. The  is

$$
\vec{L} = \vec{r} \times \vec{p},
$$

so we adapt them for quantum mechanics appropriately.

\begin{gather}
L_x = yp_z - z p_y \\\\
L_y = zp_x - x p_z \\\\
L_z = x p_y  - y p_x
\end{gather}

We are also interested in

$$
L^2 \equiv L_x^2 + L_y^2 + L_z^2
$$

And the norm commutes with the operators: $\left[L^2, L_i\right] = 0$.

It turns out that

\begin{gather}
L^2 | \psi \rangle = \hbar^2 \ell (\ell + 1) | \psi \rangle \\\\\
L_z | \psi \rangle = \hbar m | \psi \rangle
\end{gather}


If $V(\vec{r}) = V(r)$, then $L_x$, $L_y$, and $L_z$ are conserved:

$$
[H, L_x] = [H, L_y] = [H, L_z] = 0
$$

# Commutators

$$
[L_i, L_j] = \iota\hbar\epsilon_{ijk}L_k
$$