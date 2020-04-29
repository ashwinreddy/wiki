A **linear program** is a program of the form

\begin{align}
&\min_{\vec{x}} \vec{c}^\top \vec{x} \\\\\ &\text{ s.t. } A\vec{x} \preccurlyeq \vec{b}
\end{align}

For computational convenience, we like to put our linear programs in standard form. We are always guaranteed to be able to translate to standard form.

Standard Form
: \begin{align}
&\min_{\vec{x}} \vec{c}^\top \vec{x} \\\\\ &\text{ s.t. } A\vec{x} = \vec{b}, \vec{x} \succcurlyeq 0
\end{align}

Note the differences:

* Strict equality with the affine constraint
* Non-negative variable

