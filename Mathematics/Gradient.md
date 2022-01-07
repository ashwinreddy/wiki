The **gradient** of a [[function]] can mean many things depending on the type of input and output:

|Input/Output |Scalar|Vector|Matrix
|--|-----|------|------|
|**Scalar**|[[Derivative]]|Vector derivative|?|
|**Vector**|[[Gradient]]|[[Jacobian]]|?|
|**Matrix**|?|?|?|

Given a function $f: \RR^n \to \RR$, the gradient returns a [[vector field]] where the [[vector]] points in the direction of maximal ascent. Concretely, it is the collection of a functions [[partial derivatives|partial derivative]].

\begin{equation}
\nabla f( \mathbf{x} ) \triangleq \begin{bmatrix} \frac{\partial f}{\partial x_1} \\\\\ \vdots \\\\\ \frac{\partial f}{\partial x_n} \end{bmatrix}
\end{equation}

For a [[Riemannian manifold]], we write the gradient as the dual to the [[differential form]] with a [[musical isomorphism]].

$$
\operatorname{grad} f \doteq \left( \dd{f} \right)^\sharp
$$

# Examples

An [[inner product]] against a fixed vector is a function that takes a vector and returns a scalar:

$$
\nabla_x \langle x, a\rangle = a
$$

The [[norm]] is also such a function

\begin{equation\*}
\nabla_x \lVert x \rVert^2_2 = 2x
\end{equation\*}

For a [[quadratic form]]

\begin{equation\*}
\nabla_x \left[ x^\mathsf{T} A x \right] = \left(A + A^\mathsf{T}\right)x
\end{equation\*}

One that we see in machine learning a fair amount is 

\begin{equation\*}
\nabla_w \lVert y - Xw\rVert_2^2 = -2X^\mathsf{T}y + 2X^\mathsf{T}Xw
\end{equation\*}