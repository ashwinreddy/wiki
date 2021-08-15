A **Galilean transformation**. 

Consider a Galilean coordinate space. Three key examples of Galilean transformations are:

1. Uniform motion with velocity $\vec{v}$: $$g_1(t, \vec{x}) = (t, \vec{x} + \vec{v}t)$$
2. Translation of the origin: $$g_2(t, \vec{x}) = (t + s, \vec{x} + \vec{s})$$

---

describes how to switch between two reference frames in [[Galilean relativity]]. 

Typically, we consider a "stationary" reference frame and a "moving" reference frame (physics tells us that there is no such thing as a stationary reference frame, but intuitively we may spot or pick one). The moving frame has primed coordinates. We can always orient the coordinate systems so that the motion is one direction. Then, the only disagreement is in that first coordinate.

\begin{align}
x' &= x - vt \\\\\
t' &= t
\end{align}

This is a linear transformation!

\begin{equation}
\begin{bmatrix} x' \\\\\ t' \end{bmatrix} = \begin{bmatrix} 1 & -v \\\\\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\\\\ t \end{bmatrix}
\end{equation}
