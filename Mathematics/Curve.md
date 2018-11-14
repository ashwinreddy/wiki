A **curve** is defined by a map $\gamma: I \to X$ for an interval $I$ of the real numbers into a [[topological space]] $X$. 

A simple curve is injective. If $I$ is a $[a,b]$, we allow $\gamma(a)=\gamma(b)$.

Length of the curve is given by

\\[
L[\alpha; a,b] = \int_a^b \alpha'(t)dt
\\]

Therefore, lines are of minimal length because

\\[
\lvert\alpha(b)-\alpha(a)\rvert = L[\alpha; a, b]
\\]

But we're kind of assuming we have a nice parameterization like

\\[
\alpha(t) = t\vec{v} + \vec{v}_0
\\]

What if the particle backtracks? 

A regular curve is one where $\vert\alpha'(t)\vert\neq 0$.