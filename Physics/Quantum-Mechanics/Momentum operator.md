**Momentum operator** in quantum mechanics is an [[operator]] we can apply to the [[wave function]] to get the [[momentum]].

\begin{equation}
\boxed{ \hat{p} = -\iota\hbar \pdv{}{x} }
\end{equation}

In this way, 

$$
\langle p \rangle = -i\hbar \int_\RR \dd{x} \left[ \Psi^*(x) \pdv{\Psi(x)}{x}  \right]
$$

Note the order matters because $$\Psi\^* \cdot \pdv{}{x} \Psi \neq \left(\pdv{}{x} \Psi\right)\cdot\Psi\^*$$.

# Composite Operators

$$
\hat{T} = \frac{\hat{p}}{2m} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}
$$