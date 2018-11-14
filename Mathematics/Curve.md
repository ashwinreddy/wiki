A **curve** is defined by a map $\gamma: I \to X$ for an interval $I$ of the real numbers into a [[topological space]] $X$. 

Closed Curve
  : if $I=[a,b]$ and $\gamma(a)=\gamma(b)$.

Simple Curve
  : An injective curve. Allowed to be closed.
  
Jordan Curve
  : A simple closed curve.

It is a theorem that a Jordan curve divides the plane into an interior and exterior region.

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

Regular curve
  : curve where $\vert\alpha'(t)\vert\neq 0$.