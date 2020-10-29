The **Schrodinger equation** describes how quantum systems evolve over time. Thus, it is a partial differential equation. Luckily, it is linear.

The Schrodinger equation in its one-dimensional non-relativistic form compactly looks like the following

\begin{equation}
\label{eq:schro}
\iota\hbar \pdv{}{t} \Psi = \hat{H} \Psi, \tag{Schrodinger Equation}
\end{equation}

where $\Psi(x,t)$ is the [[wave function]]. Expanding the [[Hamiltonian]],

\begin{equation}
\iota \hbar \pdv{}{t} \Psi(x, t) = - \frac{\hbar^2}{2m} \frac{\partial^2 \Psi(x,t)}{\partial x^2} + V(x, t) \Psi(x,t)
\end{equation}

$$
\pdv{\Psi}{t}  = \frac{\iota\hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{\iota}{\hbar} V(x, t) \Psi
$$

[[_TOC_]]

# Time Independent Schrodinger Equation

The time independent Schrodinger equation eliminates dependence on time, but makes some key assumptions. It assumes that the potential $V$ has no dependence on time and that the solution has the form $\Psi(x, t) = \psi(x) \varphi(t)$. But, given that, we can say that $\psi(x)$ must be an [[eigenstate|eigenpairs]] of the [[Hamiltonian]],:



\begin{equation}
\label{eq:tise}
\hat{H} \psi = E \psi \iff \boxed{-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{} x^2} + V\psi = E \psi} \tag{T.I.S.E.}
\end{equation}

On the other hand,

\begin{equation}
\label{eq:time}
\dv{\varphi}{t} = -\frac{\iota E}{\hbar} \varphi
\end{equation}


The solution to Equation \ref{eq:time} is easy to find through inspection.

$$
\varphi(t) = e^{-\iota E t / \hbar}
$$





We can then attempt to solve \ref{eq:tise} to find the appropriate $\psi(x)$, and then we have

$$
\Psi(x, t) = \psi(x) e^{-\iota E t / \hbar}
$$


This is nice because

* The solution has stationary states. The probability density of finding a particle at a place does not depend on time. More generally, these stationary states will have all physical observables independent of time.
* We know exactly what the total energy (kinetic + potential) is for these states.

## Derivation

If we then plug this in,

$$
\iota\hbar\cdot \psi(x) \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \varphi(t) \frac{\dd{}^2 \psi}{\dd{} x^2} + V(x)\psi(x)\varphi(t)
$$

Then we can just divide by the wave function.

$$
i\hbar \frac{1}{\varphi} \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \frac{1}{\psi} \frac{\dd{}^2 \psi}{\dd{}x^2 } + V(x)
$$

This means that they must equal a constant $E$. You could vary over time the left side of the equation and get different values which all equal some constant on the other side. You could vary over space the right side of the equation and get different values which all equal some constant on the left side.

So we bifurcate into the two ordinary differential equations.



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