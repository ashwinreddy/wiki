The **Hamiltonian operator** in quantum mechanics represents the total energy, [[kinetic energy]] and [[potential energy]].

\begin{equation}
\boxed{\hat{H} = \widehat{T} + \widehat{V}}
\end{equation}


[[_TOC_]]

# Derivation

When we use the canonical substitution [[momentum operator]] $p \to -i\hbar(\partial / \partial x)$,

$$
\hat{T} = \frac{\hat{p}^2}{2m} = -\frac{\hbar^2}{2m}\frac{\partial ^2 }{\partial x^2}
$$

Since any general wave function is a linear combination of the stationary states $\Psi_n$, we could have

$$
\Psi(x,t) = \sum_{n=1}^\infty c_n \Psi_n(x,t)
$$

Here, it must be the case that

$$
\sum_{n=1}^\infty |c_n|^2 = 1
$$

It turns out that the energy is some weighted combination of the stationary state energies $E_n$

$$
\langle H \rangle = \sum |c_n|^2 E_n
$$

# Properties

An operator that commutes with the Hamiltonian is conserved, in expectation.

$$\left[ H, Q \right] = 0 \implies \dv{}{t} \langle Q \rangle  = 0$$

# Commutator

\begin{align}
\left[ \hat{H}, \hat{p} \right] &= \cancelto{0}{\left[ \hat{T} , \hat{p} \right]} + \left[ \hat{V} , \hat{p} \right] \\\\
&= \iota\hbar \pdv{V}{x}
\end{align}

\begin{align}
\left[ \hat{H}, \hat{x}_i \right] &= {\left[ \hat{T} , \hat{p} \right]} + \cancelto{0}{\left[ \hat{V} , \hat{p} \right]} \\\\
&= \left[ \sum_j \frac{\hat{p}_j^2}{2m},  \hat{x}_i \right]
\end{align}