The **Schrodinger equation** describes how a [[wave function]] $\Psi$ evolves over time. Compactly, it says

\begin{equation}
\label{eq:schro}
\iota\hbar \pdv{}{t} \Psi = \hat{H} \Psi, \tag{Schrodinger Equation}
\end{equation}

Concretely, the [[Hamiltonian]] will expand the equation to

\begin{equation}
\iota\hbar \pdv{\Psi}{t} = -\frac{\hbar^2}{2m} \nabla^2 \Psi + V \Psi
\end{equation}


[[_TOC_]]



# Solution Strategies

Of course, the solution depends on the potential.

1. Use the [[time-independent Schrodinger equation]] to find stationary states $\\{\psi_1(x), \psi_2(x), \dots\\}$ if the potential is time-independent. 
2. Find coefficients $c_n$ such that $\Psi(x, 0) = \sum_{n=1}^\infty c_n \psi_n(x)$.

If $| n \rangle = \psi_n(x)$,

$$
c_n = \langle n \mid \Psi(t=0) \rangle
$$

Solution is

$$
\Psi(x, t) = \sum_{n=1}^\infty c_n \psi_n(x) e^{-\iota E_n t / \hbar}
$$


This is nice because

* The solution has stationary states. The probability density of finding a particle at a place does not depend on time. More generally, these stationary states will have all physical observables independent of time.
* We know exactly what the total energy (kinetic + potential) is for these states.

# Normalized Closure

The Schrodinger equation returns normalized distributions if given normalized distributions. We have to show that

\begin{align}
\dv{}{t} \int_{-\infty}^\infty \dd{x} \cdot | \Psi|^2 &= \int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \left(  | \Psi|^2 \right) \\\\\
&= \int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \big (  \Psi\Psi^* \big ) \\\\\
&= \int_{-\infty}^\infty \dd{x}\cdot \left( \Psi^\* \pdv{\Psi}{t} + \Psi \pdv{\Psi^\*}{t} \right)  \\\\\
&= \int_{-\infty}^\infty \dd{x}\cdot \frac{i\hbar}{2m} \left( \Psi\^* \frac{\partial^2 \Psi}{\partial x^2} + \Psi\frac{\partial^2 \Psi^*}{\partial x^2} \right) \\\\\
&= \frac{i\hbar}{2m} \int_{-\infty}^\infty \dd{x} \cdot \pdv{}{x}\left( \Psi^\* \pdv{\Psi}{x} + \Psi \pdv{\Psi^\*}{x} \right) \\\\\
&= \frac{i\hbar}{2m} \left[ \Psi^\* \pdv{\Psi}{x} + \Psi \pdv{\Psi^\*}{x} \right]_{x=-\infty}^{x=+\infty} \\\\\
&= 0
\end{align}

The last step is because the wave function must be 0 at $\pm\infty$ for normalizability to make sense.

# Properties

If $V(x)$ is [[even function]], then $\psi(x)$ is even or [[odd function]].

# Examples

* [[Infinite square well]]
* [[Quantum harmonic oscillator]]
* [[Free particle]]
* [[Finite square well]]
