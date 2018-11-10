A metric on a set $X$ is a function $X\times X \to \mathbb{R}$ such that $\forall x, y, z \in X$:

1. $d(x,y)=d(y,x)$
2. $d(x,z) \leq d(x,y) + d(y,z)$
3. $d(x,x) = 0$
4. $d(x,y) = 0 \implies x = y$

Satisfying only 1 - 3 is a pseudometric.

A metric space is a $(X,d)$. 

Property 2 is called the triangle inequality. It says that a detour via z will not give a shortcut when going from x to y.

Example. Let X be a nonempty set. A metric could be

\\[
d(x,y) = [x=y]
\\]

This induces a discrete topology. A metric on $\mathbb{R}$ could be $d(x,y)=\lvert x-y \rvert$. This induces the standard topology.