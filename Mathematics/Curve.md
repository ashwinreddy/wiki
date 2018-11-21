A **curve** is defined by a map $\gamma: I \to X$ for an interval $I$ of the real numbers into a [[topological space]] $X$. 

Simple curve

:   A simple curve is one where $\gamma$ is injective.

Closed curve

:   A curve is closed if $I = [a,b]$ and $\gamma(a)=\gamma(b)$.

Jordan curve

:   A Jordan curve is a simple closed curve.

Regular curve

:   A curve whose derivative never vanishes.

Rectifiable curve

:   A curve with finite length

It is a theorem that a Jordan curve divides the plane into an interior and exterior region.



Length of the curve is given by

\\[
L[\alpha; a,b] = \int_a^b \vert \alpha'(t)\vert dt
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

Regular curve
  : curve where $\vert\alpha'(t)\vert\neq 0$.