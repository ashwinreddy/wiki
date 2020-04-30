A **linear program** is a [[second-order cone program]] of the form

\begin{align}
&\min_{\vec{x}} \vec{c}^\top \vec{x} \\\\\ &\text{ s.t. } A\vec{x} \preccurlyeq \vec{b}
\end{align}

For computational convenience, we like to put our linear programs in standard form. We are always guaranteed to be able to translate to standard form. The trick is usually to introduce slack variables for things like maxs, mins, and absolute values.

# Standard Form

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

\begin{align\*}
\mathscr{L}(\vec{x}, \vec\lambda) &=  \vec{c}^\top \vec{x} + \vec\lambda^\top(A\vec{x}-\vec{b}) \\\\\
&= (A^\top \vec\lambda + \vec{c})^\top \vec{x} - \vec\lambda^\top\vec{b}
\end{align\*}

Then,

$$
g(\lambda) = \min_\vec{x} \mathscr{L}(\vec{x}, \vec\lambda) = \begin{cases}-\infty & A^\top\vec\lambda + \vec{c} \neq \vec{0} \\ -\vec{b}^\top \vec\lambda & A^\top\vec\lambda + c = \vec{0} \end{cases}
$$

Yields the dual problem

$$
\max_{\vec\lambda \geq 0} g(\lambda) = \max_{\vec\lambda\geq 0} -\vec{b}^\top \vec\lambda \text{ s.t. } A^\top\vec\lambda + c = \vec{0}
$$