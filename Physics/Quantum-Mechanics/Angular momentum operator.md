The **(orbital) angular momentum operator** takes after classical [[angular momentum]] as both are given by $\vec{L} = \vec{r} \times \vec{p}$. We might also interested in $L^2 \equiv L_x^2 + L_y^2 + L_z^2$. 


[[_TOC_]]

# Commutators

The algebra is summarized by the following equations

\begin{equation}
[L_i, L_j] = \iota\hbar\epsilon_{ijk}L_k
\end{equation}


\begin{equation}
\left[L^2, L_i\right] = 0
\end{equation}

* If $V(\vec{r}) = V(r)$, then $L_x$, $L_y$, and $L_z$ are conserved: $[H, L_x] = [H, L_y] = [H, L_z] = 0$

# Eigenstates

Since $L_z$ and $L^2$ commute, we can look for simultaneous [[eigenstates|eigenstate]], concluding that

\begin{gather}
L^2 Y^m_\ell = \hbar^2 \ell (\ell + 1) Y^m_\ell \\\\\
L_z Y^m_\ell = \hbar m Y^m_\ell
\end{gather}

where $\ell \in \\{0, 1/2, 1, 3/2, \dots \\}$ and $m \in \\{-\ell, -\ell + 1, \dots, \ell - 1, \ell \\}$. These $Y^m_\ell$ are actually the [[spherical harmonics]].

# Raising and lowering

Define raising and lowering operators by

$$
L_\pm \equiv L_x \pm \iota L_y
$$

It turns out that

$$
[L_z, L_\pm] = \pm \hbar L_\pm
$$

# Uncertainty

The [[uncertainty principle]] tells us that

$$
\sigma_{L_x}\sigma_{L_y} \geqslant \frac{\hbar}{2}\left| \langle L_z \rangle \right|
$$