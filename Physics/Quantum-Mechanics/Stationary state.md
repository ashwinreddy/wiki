A **stationary state** is a special kind of [[quantum state]] that is useful in solving the time-dependent [[Schrodinger equation]]. In particular, it is the solution to the time-independent Schrodinger equation. Namely, a stationary state's space dependent term $\psi(x)$ is an [[eigenstate|eigenpairs]] of the [[Hamiltonian]]:

$$
\widehat{H} \psi = E\psi
$$

[[_TOC_]]

# Properties

Why are stationary states nice and/or useful? 

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
\psi & \text{is always continuous} \\
\dv{\psi}{x} & \text{is continuous except at points where the potential is infinite}
\end{cases}
$$