A **Hermitian operator** is a self-adjoint operator, one that is its own [[Hermitian adjoint]].

<div class="theorem" text='Real eigenvalues'>
A Hermitian operator with discrete spectrum has real eigenvalues.
</div>


For a proof, suppose $\widehat{Q} | f \rangle = q  | f \rangle$. Then,

\begin{gather}
\langle f \mid \widehat{Q} f \rangle = \langle \widehat{Q}f \mid f \rangle \\\\\
\langle f \mid qf \rangle  = \langle qf \mid f \rangle \\\\\
q \langle f \mid f \rangle = q^* \langle f \mid f \rangle \\\\\
q = q^*
\end{gather}

<div class="theorem" text='Real eigenvalues'>
Eigenvectors for a Hermitian operator with discrete spectrum corresponding to different eigenvalues are orthogonal.
</div>

If it has a continuous spectrum, these don't hold in quite the same way. But they turn out to be Dirac orthonormal and complete.


# Quantum Mechanics

Hermitian operators are important in quantum mechanics. In quantum mechanics, we think of a Hermitian operator $Q$ as one for which any $\mid \Psi \rangle$,

$$
\langle \hat{Q} \Psi \mid \Psi \rangle = \langle \Psi \mid \hat{Q} \Psi \rangle
$$

Compactly,

$$
\hat{Q} = \hat{Q}^\dagger
$$

1. A Hermitian operator has real eigenvalues only.
2. Eigenvectors for a Hermitian operator coming from different eigenvalues are orthogonal.

For any Hermitian operator $Q$, the eigenstates of $Q$ are the unique states with

$$
Q | \Psi \rangle = q | \Psi \rangle \iff \sigma_Q = 0 .
$$

Thus, [[stationary states|stationary state]] (eigenstates of [[Hamiltonian]]) are ones with definite energy.