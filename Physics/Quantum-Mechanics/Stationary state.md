A **stationary state** is a quantum state $\Psi(x, t) = \psi(x) \varphi(t)$ that is a solution to the time-independent [[Schrodinger equation]],

$$
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi }{\dd{} x^2} + V\psi = E \psi.
$$

A slicker description is that it has $\psi(x)$ as an [[eigenvector|eigenpairs]] of the [[Hamiltonian]]: 

$$
\hat{H} \psi_1 = E \psi_1 \implies \Psi_1(x, t) = \psi_1(x) e^{- \iota E_1 t / \hbar}
$$

Remember that the Schrodinger equation is linear, so a linear combination of solutions is also a solution. 

$$
\Psi(x, t) = \sum_{n=1}^\infty c_n \Psi_n(x, t) = \sum_{n=1}^\infty c_n \psi_n(x)e^{-\iota E_n t / \hbar}
$$

# Boundary conditions

Ordinarily, the Schrodinger equation wants to have $\psi$ and $\dv{\psi}{x}$ be continuous. However, if $V(x) = \infty$, then the condition is only on $\psi$.

# Interpretation

<<Note("Include a section here about Q(x, p)")>>

Stationary states are boring because the associated probability density doesn't depend on time.

$$
\rho(x, t) = \Psi^* \Psi = \psi^\* e^{\iota E t / \hbar} \psi e^{-\iota E t / \hbar} = |\psi(x)|^2
$$

Then, $\langle x \rangle$ is a constant, and the expected momentum $\langle p \rangle = 0$.

* They have definite total energy.

\begin{gather}
\langle H \rangle = \int \Psi^* \hat{H} \Psi \\, \dd{x} = \int \Psi^* E \Psi \\, \dd{x} = E. \\\\\
\hat{H}^2 \psi = E^2 \psi \implies \left \langle \hat{H}^2 \right \rangle = E^2.
\end{gather}

Thus, we have $\sigma^2_E = 0$, so $E$ is the only possible energy the state can have ([[Dirac delta function]]).

# Properties

* Any and all observables from a stationary state are independent of time. 
* The stationary states are orthonormal and complete

$$
\langle \psi_m \mid \psi_n \rangle = \int \dd{x} \cdot \psi_m^* \psi_n = \begin{cases}1 & m = n \\\\\ 0 & m \neq n\end{cases} = \delta_{mn}
$$