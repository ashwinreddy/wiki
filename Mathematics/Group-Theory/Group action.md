A **group action** of a [[group]] $G$ on a [[set]] $X$ is a map $\varphi: G \times X \to X$ obeying the following properties.

Identity
: $\varphi(e, x) = x$ if $e$ is the identity element in $G$

Compatability
: $\varphi(g, \varphi(h, x)) = \varphi(gh, x)$

The comptability condition intuitively says that the map needs to respect the group action. 

# Examples

A trivial example is for any $x \in X$, $\varphi(g, x) = x$. Clearly, identity holds and it's easy to check compatability.

If the set happens to be $G$ itself, we could do $\varphi(g, x) = gx$.

If $X = \RR^n$, then pick $G=\operatorname{GL}_n(\RR)$ with $\varphi(A, \vec{x}) = A\vec{x}$. This is an example of a [[group representation]].