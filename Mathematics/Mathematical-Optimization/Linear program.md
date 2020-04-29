A **linear program** is a program of the form

\begin{align}
&\min_{\vec{x}} \vec{c}^\top \vec{x} \\\\\ &\text{ s.t. } A\vec{x} \preccurlyeq \vec{b}
\end{align}

For computational convenience, we like to put our linear programs in standard form. We are always guaranteed to be able to translate to standard form.

Standard Form
: \begin{align}
&\min_{\vec{x}} \vec{c}^\top \vec{x} \\\\\ &\text{ s.t. } A\vec{x} = \vec{b}, \vec{x} \succcurlyeq 0
\end{align}


|Difference|Fix|
|----------|----|
|Strict equality with the affine constraint|Introduce slack variables $\vec{s}\succcurlyeq 0$ to say $A\vec{x} + \vec{s} = \vec{b}$|
|Non-negative variable|Rewrite $\vec{x} = \vec{x}^+ - \vec{x}^-$ for $\vec{x}^+\succcurlyeq 0$, $\vec{x}^- \succcurlyeq 0$|

# Dual problem

We construct the Lagrangian,

$$
\mathscr{L}(\vec{x}, \vec\lambda) =  \vec{c}^\top \vec{x} + \vec\lambda^\top(A\vec{x}-\vec{b})
$$