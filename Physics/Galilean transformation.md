A **Galilean transformation** describes how to switch between two reference frames. In what ways can two reference frames differ?

|Difference|Parameter|Dimension|
|:--------|----------|---------|
|Velocity|$\vec{v}$|3|
|Rotation|$(\vec{u}, \theta)$|3|
|Origin|$(\Delta\vec{x}, \Delta t)$|4|
|-------------------------------------|


* One may be moving w.r.t. the other.
* One may be rotated w.r.t. the other.
* They may differ in their origins. 



Typically, we consider a "stationary" reference frame and a "moving" reference frame (physics tells us that there is no such thing as a stationary reference frame, but intuitively we may spot or pick one). The moving frame has primed coordinates. We can always orient the coordinate systems so that the motion is one direction. Then, the only disagreement is in that first coordinate.

\begin{align}
x' &= x - vt \\\\\
t' &= t
\end{align}

This is a linear transformation!

\begin{equation}
\begin{bmatrix} x' \\\\\ t' \end{bmatrix} = \begin{bmatrix} 1 & -v \\\\\ 0 & 1 \end{bmatrix} \begin{bmatrix} x \\\\\ t \end{bmatrix}
\end{equation}
