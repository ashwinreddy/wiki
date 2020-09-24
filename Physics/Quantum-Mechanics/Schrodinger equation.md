The **Schrodinger equation** is a linear partial differential equation, which in its general non-relativistic form looks like

\begin{equation}
\label{eq:schro}
\boxed{\iota \hbar \pdv{}{t} \Psi(x, t) = - \frac{\hbar^2}{2m} \frac{\partial^2 \Psi(x,t)}{\partial x^2} + V(x, t) \Psi(x,t)} 
\end{equation}


$$
\pdv{\Psi}{t}  = \frac{\iota\hbar}{2m} \frac{\partial^2 \Psi}{\partial x^2} - \frac{\iota}{\hbar} V(x, t) \Psi
$$

# Time Independent Schrodinger Equation

Equation \ref{eq:schro} is a hard one to solve. Pretend $V(x,t)$ has no dependence on time. Suppose we were to attempt separation of variables, i.e. the solution we guess is

$$
\Psi(x, t) = \psi(x) \varphi(t)
$$

If we then plug this in,

$$
\iota\hbar\cdot \psi(x) \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \varphi(t) \frac{\dd{}^2 \psi}{\dd{} x^2} + V(x)\psi(x)\varphi(t)
$$

Then we can just divide by the wave function.

$$
i\hbar \frac{1}{\varphi} \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \frac{1}{\psi} \frac{\dd{}^2 \psi}{\dd{}x^2 } + V(x)
$$

This means that they must equal a constant $E$. You could vary over time the left side of the equation and get different values which all equal some constant on the other side. You could vary over space the right side of the equation and get different values which all equal some constant on the left side.

This is nice because

* The solution has stationary states. The probability density of finding a particle at a place does not depend on time. More generally, these stationary states will have all physical observables independent of time.
* We know exactly what the total energy (kinetic + potential) is for these states.

\begin{gather}
\iota\hbar \dv{\varphi}{t} = E\varphi
-\frac{\hbar^2}{2m} \frac{ \dd{}^2 \psi }{ \dd{} x^2 } + V(x) \psi = E \psi
\end{gather}

The solution to the first being

$$\varphi(t) = e^{-\iota E t / \hbar}$$

# Normalized Closure

The Schrodinger equation returns normalized distributions if given normalized distributions. We have to show that

\begin{gather}
\dv{}{t} \int_{-\infty}^\infty \dd{x} \cdot | \Psi(x, t)|^2 = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \left(  | \Psi(x, t)|^2 \right) = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \pdv{}{t} \big (  \Psi(x, t)\Psi(x, t)^* \big ) = 0 \\\\\
\int_{-\infty}^\infty \dd{x}\cdot \left( \Psi(x, t)^\* \pdv{\Psi(x, t)}{t} + \Psi(x, t) \pdv{\Psi(x, t)^*}{t} \right) = 0 \\\\\
\end{gather}