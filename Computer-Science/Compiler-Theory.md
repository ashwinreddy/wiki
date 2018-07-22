## Compiler Theory

- Formal Grammar
- Regular Expressions
- Automatons
- Decision Algorithms

Eliminating left recursion:

$$
A \mapsto A \alpha\, | \, \beta \iff \begin{cases}
A &\mapsto \beta A\prime \\
A\prime &\mapsto \alpha A\prime | \epsilon
\end{cases}
$$