**Hamiltonian mechanics** is a reformulation of Newtonian mechanics. Suppose we have phase space $\Gamma$.

Hamiltonian
: A function of the phase space that roughly corresponds to total energy.

# Conceptual Overview

In Hamiltonian mechanics, the equations of motion follow from the Hamiltonian. We need to turn the Hamiltonian into a [[vector field]] $\vec{V}$ such that the dynamics are flows along [[integral curve]] of that field. We know that $\vec{V}$ should depend only on $\dd{H}$ since we only care about local energy changes and that it should depend on $\dd{H}$ linearly since Newton's laws are linear differential equations.

# Equations of Motion

$$
H(p, q) = p\dot{q} - L.
$$

\begin{gather}
\dot{q} = \pdv{H}{p} \\\\
\dot{p} = -\pdv{H}{q}
\end{gather}

where $L$ is the [[Lagrangian mechanics]]. This makes the Hamiltonian the [[Legendre transform]].

Suppose you have a variable $\omega(x, p)$ that has no explicit time dependence. Then,

\begin{align}
\dv{\omega}{t} &= \pdv{\omega}{x}\dot{x} + \pdv{\omega}{p}\dot{p} \\\\
&= \pdv{\omega}{x}\pdv{H}{p} - \pdv{\omega}{p}\pdv{H}{x} \\\\
&= \\{\omega, H\\}
\end{align}