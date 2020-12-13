The **time-independent Schrodinger equation (T.I.S.E.)** is a simplification of the [[Schrodinger equation]] that happens to be extremely useful in solving the original full time-dependent equation. In operator notation, it's just an [[eigenvalue|eigenpairs]] equation for the [[Hamiltonian]].

\begin{equation}
\label{eq:operator-tise}
\hat{H} \psi = E \psi \tag{T.I.S.E.}
\end{equation}

In one dimension, it looks like

\begin{equation}
-\frac{\hbar^2}{2m} \frac{\dd{}^2 \psi}{\dd{} x^2} + V\psi = E \psi
\end{equation}

A solution to the T.I.S.E. is called a [[stationary state]], an eigenstate of the Hamiltonian.

$$
\Psi_n (x, t) = \psi_n (x) e^{-\iota E_n t / \hbar}
$$

# Solutions

The solutions to the T.I.S.E. usually come as an infinite family, but they may be discrete or continuous. In either case, we can form general solutions using either a sum (for discrete) or an integral (for continuous). However, the stationary states themselves will not be realizable for a continuous family.

# Assumptions

1. The potential is time independent
2. The solution has the form 

\begin{equation}
\label{eq:ansatz}
\Psi(x, t) = \psi(x) \varphi(t). \tag{Separable Ansatz}
\end{equation}

# Derivation

If we plug \ref{eq:ansatz} into the Schrodinger equation,

$$
\iota\hbar\cdot \psi(x) \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \varphi(t) \frac{\dd{}^2 \psi}{\dd{} x^2} + V(x)\psi(x)\varphi(t)
$$

Then we can just divide by the wave function.

$$
i\hbar \frac{1}{\varphi} \dv{\varphi}{t} = -\frac{\hbar^2}{2m} \frac{1}{\psi} \frac{\dd{}^2 \psi}{\dd{}x^2 } + V(x)
$$

This means that they must equal a constant $E$. You could vary over time the left side of the equation and get different values which all equal some constant on the other side. You could vary over space the right side of the equation and get different values which all equal some constant on the left side.

So we bifurcate into two ordinary differential equations: the T.I.S.E. and the following:


\begin{equation}
\label{eq:time}
\dv{\varphi}{t} = -\frac{\iota E}{\hbar} \varphi
\end{equation}

The solution to which is easy to find through inspection.

$$
\varphi(t) = e^{-\iota E t / \hbar}
$$