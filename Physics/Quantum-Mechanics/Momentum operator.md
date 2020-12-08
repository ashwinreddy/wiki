**Momentum operator** in quantum mechanics is an [[operator]] we can apply to the [[wave function]] to get the [[momentum]].

\begin{equation}
\boxed{ \hat{p} = -\iota\hbar \nabla }
\end{equation}

In one dimension, we just have
\begin{equation}
\hat{p} = -\iota\hbar \pdv{}{x}
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

Note that $f_p(x)$ is not a [[square-integrable function]]. However, the $f_p$'s are pseudo-orthonormal in that

$$
\langle f_{p'} \mid f_p \rangle = \delta(p - p' )
$$

They are even complete in the sense that we can write 

$$
\psi(x) = \frac{1}{\sqrt{2\pi\hbar}} \int_{-\infty}^\infty c(p) e^{\iota px / \hbar} \dd{p}
$$

# Composite Operators

$$
\hat{T} = \frac{\hat{p}}{2m} = -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}
$$

$$
\left[ \widehat{p}, \hat{H} \right] = \iota\hbar \pdv{V}{x}
$$
