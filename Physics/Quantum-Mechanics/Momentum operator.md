**Momentum operator** in quantum mechanics is an [[operator]] we can apply to the [[wave function]] to get the [[momentum]].

\begin{equation}
\boxed{ \hat{p} = -\iota\hbar \pdv{}{x} }
\end{equation}

In this way, 

$$
\langle p \rangle = -i\hbar \int_\RR \dd{x} \left[ \Psi^*(x) \pdv{\Psi(x)}{x}  \right]
$$

# Spectrum

The [[spectrum]] for the momentum operator would be functions $f_p(x)$ such that

$$
\frac{\hbar}{i} \dv{}{x}f_p(x) = p f_p (x)
$$

By inspection,

$$
f_p(x) = A_p e^{\iota px / \hbar}
$$

Note that $f_p(x)$ is not a [[square-integrable function]].

# Composite Operators

$$
\hat{T} = \frac{\hat{p}}{2m} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}
$$