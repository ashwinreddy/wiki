A **stationary state** is a [[quantum state]] $\psi$ that solves the [[time-independent Schrodinger equation]],

$$
\hat{H} \psi = E \pis
$$

In other words, it is an eigenstate for the [[Hamiltonian]].

[[_TOC_]]

# Properties

Why are stationary states nice and/or useful? Primarily because any solution to the TDSE can be formed as a linear combination from the TISE solutions.

1. Because nothing ever _happens_ in a stationary state. The wave function $\Psi(x, t)=\psi(x)\varphi(t)$ depends on time, but the probability density does not:

\begin{align}
\rho(x,t) &= \Psi(x, t)^* \Psi(x, t) \\\\
&= \psi(x)^* \cancel{ \varphi(t)^* \varphi(t)} \psi(x) \\\\
&= |\psi(x)|^2
\end{align}


2. Thus, any expected value will be constant in time.
3. A stationary state has definite total energy: $\sigma_H^2 = 0$.
4. Every normalizable stationary state has $E > \min V(x)$.

# Boundary conditions

$$
\begin{cases}
\psi & \text{is always continuous} \\\\
\dv{\psi}{x} & \text{is continuous except at points where the potential is infinite}
\end{cases}
$$