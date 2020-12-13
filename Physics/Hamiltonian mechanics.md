**Hamiltonian mechanics** is a formulation of Newtonian mechanics where the equations of motion follow from the Hamiltonian

$$
H = p\dot{x} - L.
$$

\begin{gather}
\dot{x} = \pdv{H}{p} \\\\
\dot{p} = -\pdv{H}{x}
\end{gather}

where $L$ is the [[Lagrangian mechanics]]. This makes the Hamiltonian the [[Legendre transform]].

Suppose you have a variable $\omega(x, p)$ that has no explicit time dependence. Then,

\begin{align}
\dv{\omega}{t} &= \pdv{\omega}{x}\dot{x} + \pdv{\omega}{p}\dot{p} \\\\
&= \pdv{\omega}{x}\pdv{H}{p} - \pdv{\omega}{p}\pdv{H}{x} \\\\
&= \\{\omega, H\\}
\end{align}