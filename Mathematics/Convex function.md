A **convex function** is a function $f$ whose epigraph is a [[convex set]]. 

Epigraph
: The **epigraph** of a [[function]] $f: \RR^n \to \RR $ is the [[set]] $$\{(x, t) \vert x \in \operatorname{dom} f; f(x) \leq t \}$$

# Tests

Concretely, the domain of $f$ is a convex set and

$$
f(\theta \vec{x} + (1-\theta) \vec{y}) \leq \theta f(\vec{x}) + (1-\theta)f(\vec{y})
$$

What makes convex functions useful is that any point with gradient 0 is guaranteed to be a global minimum.

## Second-order condition

If $f$ is twice differentiable, then $f$ is convex iff its domain is convex and

\begin{equation}
\nabla^2 f(x) \preccurlyeq 0
\end{equation}

# Examples

The following are convex:

* Any [[norm]], by triangle inequality.
* Any [[affine transformation]]
* A pointwise maximum of convex functions

# Properties

* Let $f: \RR \to \RR$ is convex and non-decreasing and $g: \RR^n \to \RR$ is convex, $f \circ g$ is convex.
* The pointwise maximum of convex functions is convex.
* Every norm is convex.